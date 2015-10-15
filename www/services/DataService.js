HealthCare.service('DataService', function ($q, $http, $state, AuthService) {

	function getUser(ssn) {
		var deferred = $q.defer();
		var url = '';
		var req = {
			method: 'GET',
			url: url
		};
		var data;
		$http.defaults.headers.common.Authorization = AuthService.ssn + ':' + AuthService.password;
		$http(req).success(function (userData) {
			var total = data.user.length;
			if (total == 0) {
				alert('No Data Found');
			}
			deferred.resolve(data);
		});
	}

	function getDoctor(ssn) {
		var deferred = $q.defer();
		var url = '';
		var req = {
			method: 'GET',
			url: url
		};
		var data;
		$http.defaults.headers.common.Authorization = AuthService.ssn + ':' + AuthService.password;
		$http(req).success(function (userData) {
			var total = data.user.length;
			if (total == 0) {
				alert('No Data Found');
			}
			deferred.resolve(data);
		});
	}

	function getPatient(ssn) {
		var deferred = $q.defer();
		var url = '';
		var req = {
			method: 'GET',
			url: url
		};
		var data;
		$http.defaults.headers.common.Authorization = AuthService.ssn + ':' + AuthService.password;
		$http(req).success(function (userData) {
			var total = data.user.length;
			if (total == 0) {
				alert('No Data Found');
			}
			deferred.resolve(data);
		});
	}

	function getPatients(ssn) {
		var deferred = $q.defer();
		var url = '';
		var req = {
			method: 'GET',
			url: url
		};
		var data = [];
		var i;
		$http.defaults.headers.common.Authorization = AuthService.ssn + ':' + AuthService.password;
		$http(req).success(function (userData) {
			var total = data.user.length;
			if (total == 0) {
				alert('No Data Found');
			}
			for (i = 0; i < data.length; i++) {
				deferred.resolve(data[i]);
			}
		});
	}

	function getMedicine(ssn) {
		var deferred = $q.defer();
		var url = '';
		var req = {
			method: 'GET',
			url: url
		};
		var data = [];
		var i;
		$http.defaults.headers.common.Authorization = AuthService.ssn + ':' + AuthService.password;
		$http(req).success(function (userData) {
			var total = data.user.length;
			if (total == 0) {
				alert('No Data Found');
			}
			for (i = 0; i < data.length; i++) {
				deferred.resolve(data[i]);
			}
		});
	}
});