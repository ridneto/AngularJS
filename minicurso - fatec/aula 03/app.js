(function() {
    var app = angular.module('app', []);

    app.directive('nossaDiretiva', function(){
      return{
        restrict: 'E',
        template: "<b>Nome:  </b> {{ pessoa.nome }} <br/>"+
                  "<b>Idade: </b> {{ pessoa.idade}} <br/></br>"
      }
    });

    app.controller('ControllerDiretiva', ['$scope', function($scope){
          $scope.pessoas = [
            {nome: "Michel"  , idade: 18},
            {nome: "Fernando", idade: 16}
          ];
      }]
    );


    app.directive('diretivaHello', function(){
      return{
        restrict: 'EA',
        scope: true,
        template: '<input ng-model="nome"></br> Olá {{nome}}'
      }
    });

    app.controller('Appcontroller', ['$scope', function($scope) {

      $scope.index = 0;
      $scope.frutas = [
                      "banana",
                      "maça",
                      "morango",
                      "pera",
                      "abacate"];

      $scope.cores = [
                      "red",
                      "green",
                      "black",
                      "orange",
                      "pink"];

      $scope.message="mundo";

      $scope.mostrarMensagem = function(){
        alert('funciona');
      };

      $scope.selectedColor = {'background-color': $scope.cores[$scope.index]};

      $scope.changeColor = function(index){
        $scope.index = ((index + $scope.cores.length) % $scope.cores.length);

        $scope.selectedColor = {'background-color': $scope.cores[$scope.index]};
      }
 /*
      app.directiva('diretivaContato', funcion()){
        return{
          restrict: 'E',
          template: "<b>{{contato.nome}}</b> {{contato.cidade}} </br>"+
                    "<b>Telefone: </b> {{contato.telefone}}"
        }
      });


      app.cotroller('ControllerDiretivaContato', ['$scope', function($scope){
          $scope.contatos = [
            {nome: "Fernando",
             sobrenome: "Rodrigues Baroni",
             telefone: 5515996218011,
             cidade: "Sorocaba"}
             {nome: "Ridineu",
              sobrenome: "Moraes Neto",
              telefone: 5515996409111,
              cidade: "Votorantim"}
              {nome: "Leonardo",
               sobrenome: "Amaral da Rocha",
               telefone: 5515996415812,
               cidade: "Sorocaba"}
          ];
        }]
      );
      */

    }]);
})();
