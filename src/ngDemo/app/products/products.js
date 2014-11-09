(function() {
    "use strict";

    function ProductsListController($scope, productsService, $location) {

        productsService.listProducts().then(function (result) {
            $scope.products = result.data;
        }, function (error) {
            alert(JSON.stringify(error));
        });

        $scope.loadDetails = function (product) {
            $location.path("/product/" + product.Id);
        };
    };

    app.module.controller("productsListController", ProductsListController);
})();
