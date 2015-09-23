app.controller('BookController',['$scope','books',function($scope,books){
  books.get(function(data){
    $scope.books=data;
  });

}]);











// app.controller('BookController', function($scope){
//   $scope.onebook="mybook";

//   $scope.books=[
//     {name:'Kifo Kisimani',
//      price:200,
//       images:'cover.jpg',
//       author:'Ken Walibora',
//        authordesc:'The author is autistis and .....',
//        synopsis:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo turpis, rutrum quis ullamcorper nec, fermentum at ex. Proin pharetra, diam ac convallis commodo, nunc sem efficitur tortor, et ornare odio sem sed ligula. Aliquam sed leo scelerisque, bibendum magna nec, ultricies elit. Quisque aliquam sodales odio, in euismod orci placerat id.'
     
//     },
//     {
//       name:'Living ', 
//       price:8000,
//       images:'images.jpeg',
//        author:'Ken Walibora',
//        authordesc:'The author is autistis and .....',
//        synopsis:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo turpis, rutrum quis ullamcorper nec, fermentum at ex. Proin pharetra, diam ac convallis commodo, nunc sem efficitur tortor, et ornare odio sem sed ligula. Aliquam sed leo scelerisque, bibendum magna nec, ultricies elit. Quisque aliquam sodales odio, in euismod orci placerat id.'
     
//     },
//     {
//     name:'Kifo Kisimani', 
//     price:200,
//     images:'cover.jpg',
//      author:'Ken Walibora',
//        authordesc:'The author is autistis and .....',
//        synopsis:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo turpis, rutrum quis ullamcorper nec, fermentum at ex. Proin pharetra, diam ac convallis commodo, nunc sem efficitur tortor, et ornare odio sem sed ligula. Aliquam sed leo scelerisque, bibendum magna nec, ultricies elit. Quisque aliquam sodales odio, in euismod orci placerat id.'
     
//   },
//     {
//     name:'Living', 
//     price:8000,
//     images:'cover.jpg',
//      author:'Ken Walibora',
//        authordesc:'The author is autistis and .....',
//        synopsis:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo turpis, rutrum quis ullamcorper nec, fermentum at ex. Proin pharetra, diam ac convallis commodo, nunc sem efficitur tortor, et ornare odio sem sed ligula. Aliquam sed leo scelerisque, bibendum magna nec, ultricies elit. Quisque aliquam sodales odio, in euismod orci placerat id.'
     
//   }
//   ];
// });