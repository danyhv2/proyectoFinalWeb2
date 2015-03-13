var socialShare = angular.module('moduleSocial', ['ngSocial']);
socialShare.directive('social', [

	function () {
		return {
			restrict: 'E',
			templateUrl: 'pages/_social.html',
			controller: 'SocialCtrl'
		};
}]);
socialShare.controller('SocialCtrl', function ($scope) {
	$scope.current_url = 'localhost/ProgramacionWebDinamica/Votacion';
	$scope.current_title = 'Testing finales de social-angular-easy';
	$scope.current_description = 'Wopa description';
	$scope.current_img = 'pacman.jpg';
});