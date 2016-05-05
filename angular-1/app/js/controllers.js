(function () {
    angular.module('controllers', ['services'])

        .controller('HomeController', function ($scope, getPeople) {
            $scope.persons = "";
            getPeople.query(function (response) {
                $scope.persons = response;
            })
        })

        .controller('HeaderController', function ($scope) {
            $scope.titulo = "Tarefa da CINQ - Design responsivo: 4 colunas full hd / 2 colunas hd / 1 coluna wvga";
        })

})();