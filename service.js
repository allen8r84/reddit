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
    
});