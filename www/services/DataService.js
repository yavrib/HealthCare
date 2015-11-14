HealthCare.service('DataService', function ($q, $http, $state, AuthService) {
	this.getUser = function getUser(ssn) {
		var deferred = $q.defer();
		var url = '';
		var req = {
			method: 'GET',
			url: url
		};
		$http.defaults.headers.common.Authorization = AuthService.ssn + ':' + AuthService.password;
		$http(req).success(function (userData) {
			var total = userData.length;
			if (total == 0) {
				alert('No Data Found');
			}
			deferred.resolve(userData);
		});
		return deferred.promise;
	}

	this.getDoctor = function getDoctor(ssn) {
		var deferred = $q.defer();
		var url = '';
		var req = {
			method: 'GET',
			url: url
		};
		$http.defaults.headers.common.Authorization = AuthService.ssn + ':' + AuthService.password;
		$http(req).success(function (doctorData) {
			var total = doctorData.length;
			if (total == 0) {
				alert('No Data Found');
			}
			deferred.resolve(doctorData);
		});
		return deferred.promise;
	}

	this.getPatient = function getPatient(ssn) {
		var deferred = $q.defer();
		var url = '';
		var req = {
			method: 'GET',
			url: url
		};
		$http.defaults.headers.common.Authorization = AuthService.ssn + ':' + AuthService.password;
		$http(req).success(function (patientData) {
			var total = patientData.length;
			if (total == 0) {
				alert('No Data Found');
			}
			deferred.resolve(patientData);
		});
		return deferred.promise;
	}

	this.getPatients = function getPatients(ssn) {
		var deferred = $q.defer();
		var url = '';
		var req = {
			method: 'GET',
			url: url
		};
		var i;
		$http.defaults.headers.common.Authorization = AuthService.ssn + ':' + AuthService.password;
		$http(req).success(function (patientsData) {
			var total = patientsData.length;
			if (total == 0) {
				alert('No Data Found');
			}
			for (i = 0; i < patientsData.length; i++) {
				deferred.resolve(patientsData[i]);
			}
		});
		return deferred.promise;

	}

	this.getMedicine = function getMedicine(ssn) {
		/*var deferred = $q.defer();
		var url = '';
		var req = {
			method: 'GET',
			url: url
		};
		var i;
		$http.defaults.headers.common.Authorization = AuthService.ssn + ':' + AuthService.password;
		$http(req).success(function (medicineData) {
			var total = medicineData.length;
			if (total == 0) {
				alert('No Data Found');
			}
			for (i = 0; i < medicineData.length; i++) {
				deferred.resolve(medicineData[i]);
			}
		});
		return deferred.promise;
		*/
		var medicine =
		{"medicine":[
			{"name": "Maxaljin","frequency":"1/24"},	
			{"name": "Majezik","frequency":"1/24"}
		]};
		return medicine;
	}
});