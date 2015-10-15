HealthCare.controller('doctor-controller', function ($scope, DataService, $ionicLoading, $stateParams, AuthService) {

    var doctor;
    $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });
    var directLogin = $stateParams.directLogin;
    if (directLogin == 'Y') {
        AuthService.login($scope.ssn, $scope.password)
    }
    DataService.getDoctor($scope.ssn).then(function (data) {
        doctor = data;
    });
})