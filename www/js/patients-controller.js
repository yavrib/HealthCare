HealthCare.controller('patients-controller', function ($scope, $state, $timeout, DataService, $ionicLoading, $stateParams, AuthService) {
    var credentials = window.localStorage.getItem(credentials);
    var patients = [];
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
    DataService.getPatients($scope.ssn).then(function (data) {
        if (credentials != undefined) {
            patients = data;
        }
        else {
            $state.go('/login');
        }
    });
})