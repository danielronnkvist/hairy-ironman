  var app = angular.module('hairy', []);

  // app.controller('ListController', function(){
  //   this.product = schedule;
  // });


  app.controller('ListController', function($scope, $http) {
    $http.get('/schedule.json')
      .then(function(res){
        $scope.posts = res.data;
        $scope.search = '';
        var regex;
        $scope.$watch('search', function (value) {
            regex = new RegExp('\\b' + escapeRegExp(value), 'i');
        });

        $scope.filterBySearch = function(name) {
            if (!$scope.search) return true;
            return regex.test(name);
        };
      });
  });

function escapeRegExp(string){
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
