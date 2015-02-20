var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q) {
    this.getData = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://devmtn.firebaseio.com/posts.json'
        }).then(function(response){
            response = response.data;
            deferred.resolve(response);
        });
        return deferred.promise;
    };
    
    this.addPost = function(newPost) {
        newPost.timestamp = Date.now();
        newPost.comments = [];
        newPost.karma = 0;
        newPost.id = guid();
        
        var deferred = $q.defer();
        
        $http.put('https://devmtn.firebaseio.com/posts/' + newPost.id + '.json', newPost).then(function(res){
            defered.resolve(res);
        })
       
    }
    
    this.vote = function(postId, direction, karma) {
        if(direction === 'up') {
            karma++;
        }else if (direction === 'down') {
            karma--;
        }else {
            console.log('karma isn\'t working');
        }
        return $http.patch('https://devmtn.firebaseio.com/posts/' + postId + '.json', {'karma': karma}).then(function(data){
           
        })
    }
    
    this.addComment = function(postId, commentObj) {
        return $http.post('https://devmtn.firebaseio.com/posts/' + postId + '/copmments.json', {comments: commentObj});
    }

    
    var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
    
});