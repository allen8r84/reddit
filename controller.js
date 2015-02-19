var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService) {
    
    $scope.getPosts = function() {
        FirebaseService.getData().then(function(res){
            $scope.posts = res;
        });
    };
    $scope.getPosts();
});