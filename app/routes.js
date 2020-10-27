(function(){
    'use strict';

    angular.module('app').config(function($routeProvider){
        $routeProvider
            .when('/',{
                controller: 'ListaInvestimentoController',
                controllerAs: 'vm',
                templateUrl: 'views/lista-investimento.html'
            })
            .when('/resgaste',{
                controller: 'ResgasteInvestimentoController',
                controllerAs: 'vm',
                templateUrl: 'views/resgaste-investimento.html',
                investimento: undefined
            })
            .otherwise({
                controller: 'ListaInvestimentoController',
                controllerAs: 'vm',
                templateUrl: 'views/404.html'
            });
    });
})();