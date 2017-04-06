(function() {
    var app = angular.module('app', []);

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

    }]);
})();











/*  $scope.pessoas = [
      {nome: 'Fernando', sobreNome: 'Baroni'},
      {nome: 'Roberto', sobreNome: 'Richardon'},
      {nome: 'Juca', sobreNome: 'Loco'}
  ];
}]);

app.directive('minhaPessoa', function() {
         return {
             restrict: 'A',
             template: '<span style="font-weight: bold">{{p.nome}}</span>' +
              ' {{p.sobreNome}}'
         };*/
