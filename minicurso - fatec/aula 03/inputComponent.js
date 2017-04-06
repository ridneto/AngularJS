(function(){

  var.app = angular.module('input', []);

  app.directive('meuInput', function meuInput(){
    return{
      restrict: 'E',
      scope: {
        type: '@',
        value: '='
      },
      template: '<input ng-model="nome"></br> Olá {{nome}}'
    }
  });

})();
