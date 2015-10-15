HealthCare.controller('patients-controller', function ($scope, DataService, $ionicLoading, $stateParams, AuthService) {

    var patients = [];
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
    DataService.getPatients($scope.ssn).then(function (data) {
        patients = data;
    });
})