import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ListController from './controllers/ListController';
import DetailController from './controllers/DetailController';

import DataService from  './services/DataService';

angular.module('taller',['ui.router'])

.controller('ListController',ListController)
.controller('DetailController',DetailController)

.service('DataService',DataService)

.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/list');

	$stateProvider
		.state('list',{
			url : '/list',
			views : {
				mainView : {
					controller : 'ListController',
					controllerAs : 'list',
					templateUrl : '/views/list.html'
				}
			}
		})
		.state('detail',{
			url : '/detail/:id',
			views : {
				mainView : {
					controller : 'DetailController',
					controllerAs : 'detail',
					templateUrl : '/views/detail.html'
				}
			}
		})
})