HealthCare.service('AuthService', function ($q, $http, $state) {
	this.Authentication// = 'false'// = 'true';
	this.isAuthenticated// = false// = true;
	var role = '';

	if (this.Authentication = 'true') {
		this.isAuthenticated = true;
	} else {
		this.isAuthenticated = false;
	}
	
	this.login = function login (ssn,password){
		window.localStorage.setItem(this.Authentication, 'true')
		this.isAuthenticated = true
	}
	/*
	this.login = function login(ssn, password) {
		var params = { 'ssn': ssn, 'password': password };
		$http({
			method: 'GET',
			url: '',
			params: params
		}).then(function successCallback(response) {
			this.isAuthenticated = true;
			window.localStorage.setItem(this.Authentication, 'true');
			role = response;
		}, function errorCallback(response) {
			this.isAuthenticated = false;
			window.localStorage.removeItem(this.Authentication);
		});
	}
	*/
})