HealthCare.service('AuthService', function ($q, $http, $state) {
	var Authentication;
	var isAuthenticated;
	var role = '';

	if (Authentication = 'true') {
		isAuthenticated = true;
	} else {
		isAuthenticated = false;
	}

	function login(ssn, password) {
		var params = { 'ssn': ssn, 'password': password };
		$http({
			method: 'GET',
			url: '',
			params: params
		}).then(function successCallback(response) {
			isAuthenticated = true;
			window.localStorage.setItem(Authentication, 'true');
			role = response;
		}, function errorCallback(response) {
			isAuthenticated = false;
			window.localStorage.removeItem(Authentication);
		});
	}
})