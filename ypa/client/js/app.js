var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/form', {
        templateUrl: 'Pages/form.html',
        controller: 'FormController'
    })
    .when('/data', {
        templateUrl: 'Pages/data.html',
        controller: 'DataController'
    })
    .otherwise({
        redirectTo: '/form'
    });
});


/**    const app = angular.module('myApp', ['ngRoute']);

// إعداد التوجيهات
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/page1', {
            templateUrl: 'pages/page1.html',
            controller: 'MyController' // تأكد من استخدام MyController
        })
        .when('/page2', {
            templateUrl: 'pages/page2.html',
            controller: 'detailController'
        })
        .otherwise({
            redirectTo: '/' // تغيير التوجيه الافتراضي إلى page1
        });
}]); */