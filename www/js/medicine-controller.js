HealthCare.controller('medicine-controller', function ($scope, DataService, $ionicLoading, $stateParams, AuthService) {

    var medicine;
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
    DataService.getMedicine($scope.ssn).then(function (data) {
        medicine = data;
    });
})