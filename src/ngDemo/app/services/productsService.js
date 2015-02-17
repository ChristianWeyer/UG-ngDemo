(function() {
    "use strict";

    function ProductsService($http, configService) {
        this.listProducts = function () {
            return $http.get(configService.servicesBaseUrl + "api/products/list");
        };

        this.loadProductDetails = function (id) {
            return $http.get(configService.servicesBaseUrl + "api/products/item?id=" + id);
        };
    };

    app.module.service("productsService", ProductsService);
})();
