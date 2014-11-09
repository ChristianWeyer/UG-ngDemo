(function() {
    "use strict";

    function ProductDetailsController($scope, productsService, $location, $routeParams) {
        var id = $routeParams.id;

        productsService.loadProductDetails(id).then(function (result) {
            $scope.product = result.data;
        }, function (error) {
            alert(JSON.stringify(error));
        });

        $scope.cancel = function () {
            $location.path("/products");
        };
    };

    app.module.controller("productDetailsController", ProductDetailsController);
})();
