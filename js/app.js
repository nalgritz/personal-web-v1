app = /**
* PersonalWebApp Module
*
* Description
*/
angular.module('PersonalWebApp', ['ngMaterial'])

.run(function() {
  console.log('MyApp is ready!');
})

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
});
