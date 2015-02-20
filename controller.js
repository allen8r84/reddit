var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService) {
    
    $scope.getPosts = function() {
        FirebaseService.getData().then(function(res){
            $scope.posts = res;
        });
    };
    
    $scope.getPosts();
    
    $scope.addPost = function() {
        FirebaseService.addPost($scope.newPost).then(function(res) {;
            getData();
        });
        $scope.reset();
    };
    $scope.reset = function() {
        $scope.newPost = {};
    };
    setInterval(function() {
        $scope.getPosts();     
    }, 1500);
    
    $scope.vote = function(id, direction) {
        FirebaseService.vote(id, direction, $scope.posts[id].karma).then(function(data) {
            $scope.getPosts();
        });
    };
    
    $scope.submitComment = function(id, comment) {
        var commentObj = {};
        commentObj.text = comment;
        commentObj.timestamp = Date.now();
        
        FirebaseService.addComment(id, commentObj).then(function(data) {
          getData();  
        })
        
        
    }
    
});