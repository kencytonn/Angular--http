/**
 * Created by Kenwambua on 9/24/15.
 */
'use strict';


describe('Bookstore controllers', function() {

    describe('BookController', function(){
        var scope, ctrl;

        beforeEach(module('Bookstore'));

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('BookController', {$scope:scope});
        }));


        it('should return "books" model with 4 books', function() {
            expect(scope.books.length).toBe(4);
        });

    });
});
