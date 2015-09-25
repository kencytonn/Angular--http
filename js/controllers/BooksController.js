app.controller('BookController',['$scope','books',function($scope,books){
  books.get(function(data){
    $scope.books=data;
  });

}]);


