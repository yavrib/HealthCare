HealthCare.service('AuthService', function ($q, $http, $state) {
	this.Authentication// = 'false'// = 'true';
	this.isAuthenticated// = false// = true;
	var role = '';

	if (this.Authentication = 'true') {
		this.isAuthenticated = true;
	} else {
		this.isAuthenticated = false;
	}
	//test
	this.login = function login (ssn,password){
		window.localStorage.setItem(this.Authentication, 'true')
		this.isAuthenticated = true
	}
	/*
	//prod
	this.login = function login(ssn, password) {
		var params = { 'ssn': ssn, 'password': password };
		$http({
			method: 'GET',
			url: '',
			params: params
		}).then(function successCallback(response,userRole) {
			this.isAuthenticated = response;
			window.localStorage.setItem(this.Authentication, 'true');
			role = userRole;
		}, function errorCallback(response) {
			this.isAuthenticated = response;
			window.localStorage.removeItem(this.Authentication);
		});
	}
	*/
})