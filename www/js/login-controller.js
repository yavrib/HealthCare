HealthCare.controller('login-controller', function ($scope, $timeout, $state, $ionicPopup, AuthService, $ionicLoading) {
	//prod
	$scope.login = function (ssn, password) {
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});
		AuthService.login(ssn, password);
		alert(AuthService.isAuthenticated)
		if (AuthService.isAuthenticated) {
			$state.go('user', { directLogin: 'N' }, { reload: true });
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
	/*
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
	}*/
});