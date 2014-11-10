(function () {
    "use strict";

    window.app = window.app || { resolver: {} };

    app.module = angular.module("myApp", ["ngRoute", "angular-loading-bar"]);

    app.module.config(function ($routeProvider) {
        $routeProvider
            .when("/", { templateUrl: "app/products/products.html", controller: "productsListController" })
            .when("/products", { templateUrl: "app/products/products.html", controller: "productsListController" })
            .when("/product/:id", { templateUrl: "app/products/product.html", controller: "productDetailsController" })
            .when("/login", { templateUrl: "app/login/login.html" })
            .otherwise({ redirectTo: "/" });
    });
})();
