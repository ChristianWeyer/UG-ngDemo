myApp.factory("productsService", function ($http) {
    var service = {};

    service.listProducts = function () {
        return $http.get("/api/products");
    };

    service.loadProductDetails = function (id) {
        return $http.get("/api/products?id=" + id);
    };

    return service;
});