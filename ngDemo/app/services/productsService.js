myApp.factory("productsService", function ($http, configService) {
    var service = {};

    service.listProducts = function () {
        return $http.get(configService.servicesBaseUrl + "api/products");
    };

    service.loadProductDetails = function (id) {
        return $http.get(configService.servicesBaseUrl + "api/products?id=" + id);
    };

    return service;
});