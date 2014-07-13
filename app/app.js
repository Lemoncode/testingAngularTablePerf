var sampleApp = angular.module('sampleApp', ['ngRoute', 'ngGrid'])

.config(["$routeProvider", function($routeProvider) {


    $routeProvider
        	.when('/',
            {
                controller: 'HomeController',
                templateUrl:'/app/partials/home.html'
            })

        	.when('/custom',
            {
                controller: 'CustomTableController',
                templateUrl:'/app/partials/customTable.html'
            })

            .when('/customOneTime',
            {
                controller: 'CustomTableController',
                templateUrl:'/app/partials/customTableOneTime.html'
            })

        	.when('/ngGrid',
            {
                controller: 'NgGridSolutionController',
                templateUrl:'/app/partials/ngGridSolution.html'
            })


            .otherwise({
                redirectTo: '/'
            });
}]);