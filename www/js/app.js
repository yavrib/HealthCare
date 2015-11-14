// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var HealthCare = angular.module('starter', ['ionic'])

HealthCare.controller('HealthCare-controller', function ($scope, $state, $ionicPopup, AuthService) {



  //  $scope.$on(AUTH_EVENTS.notAuthenticated, function (event) {
  //    AuthService.logout();
  //    $state.go('login');
  //    var alertPopup = $ionicPopup.alert({
  //      title: 'Connection Lost!',
  //      template: 'Sorry, You have to login again.'
  //    });
  //  });

  $scope.logout = function () {
    AuthService.Authentication = 'false';
    $state.go('login');

  };

  HealthCare.run(function ($ionicPlatform, $state, AuthService) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      if (!AuthService.isAuthenticated()) {
        event.preventDefault();
        $state.go('login', { reload: true });
      }
    });
  });
});
HealthCare.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('menu', {
      cache: false,
      url: '/',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'login-controller'

    })
    .state('menu.doctor', {
      url: 'menu/doctor',//:status',
      views: {
        'menuContent': {
          templateUrl: 'templates/doctor.html',
          controller: 'doctor-controller'
        }
      }
    })
    .state('menu.medicine', {
      url: 'menu/medicine',//:status',
      views: {
        'menuContent': {
          templateUrl: 'templates/medicine.html',
          controller: 'medicine-controller'
        }
      }
    })
    .state('menu.patient', {
      url: 'menu/patient',//:status',
      views: {
        'menuContent': {
          templateUrl: 'templates/patient.html',
          controller: 'patient-controller'
        }
      }
    })
    .state('menu.patients', {
      url: 'menu/patients',//:status',
      views: {
        'menuContent': {
          templateUrl: '/templates/patients.html',
          controller: 'patients-controller'
        }
      }
    })
    .state('menu.user', {
      url: 'menu/user',//:directLogin',
      views: {
        'menuContent': {
          templateUrl: 'templates/user.html',
          controller: 'user-controller'
        }
      }
    })
    .state('menu.alarm', {
      url: 'menu/alarm',//:status',
      views: {
        'menuContent': {
          templateUrl: 'templates/alarm.html',
          controller: 'alarm-controller'
        }
      }
    })
    $urlRouterProvider.otherwise('menu/medicine');
  //$urlRouterProvider.otherwise('/login');
});

