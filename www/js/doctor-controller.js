HealthCare.controller('doctor-controller', function ($scope, $state, $timeout, DataService, $ionicLoading, $stateParams, AuthService) {
    var credentials = window.localStorage.getItem(credentials);
    var doctor;
    $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });
    /*var directLogin = $stateParams.directLogin;
    if (directLogin == 'Y') {
        AuthService.login($scope.ssn, $scope.password)
    }*/
    $timeout(function () {
        $ionicLoading.hide();
    }, 500);
    DataService.getDoctor($scope.ssn).then(function (data) {
        if (credentials != undefined) {
            doctor = data;
        }
        else {
            $state.go('/login');
        }
    });
})