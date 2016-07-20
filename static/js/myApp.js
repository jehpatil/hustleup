angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.service'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '../html_templates/home.html',
        controller: 'myController'
    })
    .state('login', {
        url: '/login',
        templateUrl: '../html_templates/login.html',
        controller: 'userController'
    })
    .state('register', {
        url: '/registration',
        templateUrl: '../html_templates/registration.html',
        controller: 'myController'
    });
});