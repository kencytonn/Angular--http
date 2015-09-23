/**
 * Created by Kenwambua on 9/23/15.
 */
var app = angular.module('Bookstore',['ngRoute']);
app.config(function ($routeProvider){
    $routeProvider
            .when('/login', {
                controller: "LoginController",
                templateUrl: "views/login.html"
            })
            .when('/SignUp', {
                controller: "SignupController",
                templateUrl: "views/signup.html"
            })
             .when('/Books', {
                controller: "BookController",
                templateUrl: "views/books.html"
            })
            .otherwise({
                redirectTo: '/login'
            });

});
