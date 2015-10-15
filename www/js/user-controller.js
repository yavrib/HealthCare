HealthCare.controller('user-controller', function ($scope, DataService, $ionicLoading, $stateParams, AuthService) {

    var user;
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
    DataService.getUser($scope.ssn).then(function (data) {
        user = data;
    });
})