app.controller('NavCtrl', ['$scope', function($scope){


  // Can do Better
  // click on the button, others becomes false. HOW?
  // others = false;
  // $scope.goto = function (e) {
  //   console.log(e);
  //   $scope.e = true;
  // }

  $scope.toHome = function () {
    $scope.home = true;
    $scope.aboutme = false;
    $scope.works = false;
    $scope.contactme = false;
  }

  $scope.toAboutMe = function () {
    $scope.home = false;
    $scope.aboutme = true;
    $scope.works = false;
    $scope.contactme = false;
  }

  $scope.toWorks = function () {
    $scope.home = false;
    $scope.aboutme = false;
    $scope.works = true;
    $scope.contactme = false;
  }

  $scope.toContactMe = function () {
    $scope.home = false;
    $scope.aboutme = false;
    $scope.works = false;
    $scope.contactme = true;
  }
  $scope.toHome();
}])