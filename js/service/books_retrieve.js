app.factory('books', ['$http', function ($http) {
    return {
        get: function (response) {
            $http.get('https://api.myjson.com/bins/56w4w').success(function (data) {
                response(data);
            });
        }
    }
}]);

