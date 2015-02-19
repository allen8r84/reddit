var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q) {
    //https://devmtn.firebaseio.com/posts.json
    //DevMtn
    debugger // use this anywhere to debug code
    this.getdata = function() {
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
    
});