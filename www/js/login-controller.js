HealthCare.controller('login-controller', function ($stateParams, $scope, $timeout, $state, $ionicPopup, AuthService, $ionicLoading) {
	var credentials = window.localStorage.getItem(credentials);
	$scope.login = function (ssn, password) {
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});
		AuthService.login(ssn, password);
		if (credentials != undefined) {
			$state.go('menu.user');
			$timeout(function () {
				$ionicLoading.hide();
			}, 500);
		}
		else {
			$timeout(function () {
				$ionicLoading.hide();
			}, 500);
			$ionicPopup.alert({
				title: 'Login failed!',
				template: 'Please check your credentials!'
			});
		};
	};
	/*/
	//test
	$scope.login = function (ssn, password) {
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});
		alert(ssn + ' ' + password);
		$state.go('user');
		$timeout(function () {

			$ionicLoading.hide();
		}, 5500);
	}
	//*/
});