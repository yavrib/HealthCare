HealthCare.service('AuthService', function ($scope, $q, $http, $state) {
	var credentials = undefined;
	var role;
	this.login = function login(ssn, password) {
		var params = { 'ssn': ssn, 'password': password };
		$http({
			method: 'GET',
			url: '',
			params: params
		}).then(function successCallback(response,userRole) {
			credentials = response;
			window.localStorage.setItem(credentials);
			role = userRole;
		}, function errorCallback(response) {

		});
	}
	this.logout = function logout() {
		credentials = undefined;
		window.localStorage.removeItem(credentials);
	}
	
})