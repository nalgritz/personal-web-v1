app.controller('WorksCtrl', ['$scope', function($scope){

  $scope.works = [{
    title: "Dodge Hell",
    subtitle: "Minigame Revival - pure frontend game finished in 3-week learning",
    img_url: "./img/project1_dodge_hell.png"
  }, {
    title: "Split",
    subtitle: "Taxi Sharing Platform - a taxi sharing platform using nodejs, mongodb and jquery with Google geo-location service",
    img_url: "./img/project2_split.png"
  }, {
    title: "Spoonfeed",
    subtitle: "A news aggregation service made with classmates which empowered me good version control skill",
    img_url: "./img/project3_spoonfeed.png"
  }, {
    title: "SimplyHome",
    subtitle: "Mobile app platform for Real Estate agents & renters collaboration with clients",
    img_url: "./img/project4_simplyhome.png"
  }]

}])