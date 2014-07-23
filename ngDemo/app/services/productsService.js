myApp.factory("productsService", function ($http) {
    var service = {};

    service.listProducts = function () {
        return $http.get(myApp.servicesBaseUrl + "api/products");
    };

    service.loadProductDetails = function (id) {
        return $http.get(myApp.servicesBaseUrl + "api/products?id=" + id);
    };

    return service;
});