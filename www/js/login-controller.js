HealthCare.controller('login-controller', function ($scope, $state, $ionicPopup, AuthService, $ionicLoading) {
	$scope.login = function (ssn, password) {
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});
		AuthService.login(ssn, password)
		if (AuthService.isAuthenticated) {
			$state.go('user', { directLogin: 'N' }, { reload: true });
			$ionicLoading.hide();
		}
		else {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: 'Login failed!',
				template: 'Please check your credentials!'
			});
		};
	};
});