(function () {
    'use strict';

    angular.module('app').controller('ListaInvestimentoController', function ($scope, InvestimentoRepository,$location, $rootScope) {
        $scope.investimentos = [];
        $scope.titulo = 'Investimentos';

        getInvestimentos();

        function getInvestimentos() {
            InvestimentoRepository.get()
                .then(function (response) {
                    console.log(response);
                    $scope.investimentos = response.data.response.data.listaInvestimentos;
                });
        }

        $scope.go = function(investimento) {
            if(investimento.indicadorCarencia == 'N'){
                $rootScope.investimento = investimento;
                $location.path("/resgaste");
            } 
        };          
    });

    angular.module('app').factory('InvestimentoRepository', function ($http) {
        var repository = {
            get: getInvestimentos
        };
        return repository;

        function getInvestimentos() {
            return $http.get('http://www.mocky.io/v2/5e76797e2f0000f057986099');
        }
    });
})();
           
           
      