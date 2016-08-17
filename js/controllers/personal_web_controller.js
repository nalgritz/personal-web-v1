app.controller('HomeCtrl', ['$scope', function($scope){

    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;
    $scope.googleUrl = 'http://google.com';

    $scope.works = [{
      title: "Dodge Hell",
      subtitle: "Minigame Revival",
      img_url: "img/project1_dodge_hell.png"
    }, {
      title: "Split",
      subtitle: "Taxi Sharing Platform",
      img_url: "img/project2_split.png"
    }, {
      title: "Spoonfeed",
      subtitle: "A news aggregation Platform",
      img_url: "img/project3_spoonfeed.png"
    }, {
      title: "SimplyHome",
      subtitle: "Mobile app platform for Real Estate agents & renters collaboration with clients",
      img_url: "img/project4_simplyhome.jpg"
    }];



}])