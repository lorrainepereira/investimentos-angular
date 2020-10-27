(function () {
    'use strict';

    angular.module('app').controller('ResgasteInvestimentoController', function ($scope, $rootScope) {
        $scope.investimento = $rootScope.investimento;

        $scope.totalResgastar = 0;

        $scope.acoes = [];
        $scope.inputValores = [];
        $scope.isValido = true;
        $scope.mensagem = "";
        $scope.showMensagemSucesso = false;
        $scope.mensagemSucesso = "Resgaste realizado com sucesso!";
        $scope.isCamposNulos = true;


        $scope.investimento.acoes.forEach(element => {
            var valor = ($scope.investimento.saldoTotalDisponivel / 100) * element.percentual;
            $scope.acoes.push({id: element.id, nome: element.nome, valor: valor});
            $scope.totalResgastar += valor;
        });

        $scope.submit = function(){
            verificaValidos();
            if($scope.isValido){
                resgaste();
            }
            
        } 


        function verificaValidos() {
            $scope.isValido = true;
            $scope.mensagem = ""
            $scope.showMensagemSucesso = false;

            verificaArrayNulo();
            if ($scope.isCamposNulos) {
                $scope.isValido = false;
                $scope.mensagem = "Preencha o(s) campo(s) para resgaste."
            } else {
                $scope.acoes.forEach(element => {
                    $scope.inputValores.forEach((indice, index) => {
                        if (indice != undefined && element.id == index) {
                            if (indice > $scope.totalResgastar) {
                                $scope.isValido = false;
                                $scope.mensagem = indice + " é superior ao total do resgaste. ";
                            }
                            if (indice > element.valor) {
                                $scope.isValido = false;
                                $scope.mensagem += indice + " ao saldo acumulado.";
                            }
                        }
                    });
                });

            }
        }


        function resgaste(){
            $scope.acoes.forEach(element => {
                $scope.inputValores.forEach((indice, index) => {
                    if(indice != undefined && element.id == index){
                        element.valor -= indice;
                        $scope.totalResgastar -= indice;  
                        $scope.showMensagemSucesso = true;                     
                    }
                });
            });
        }


        function verificaArrayNulo(){
            $scope.isCamposNulos = true;
            if($scope.inputValores != null || $scope.inputValores.length > 0){
                $scope.inputValores.forEach((indice) => {
                    if(indice != null){
                        $scope.isCamposNulos = false;
                    }
                });
            }         
        }
    });

})();
           
           
      