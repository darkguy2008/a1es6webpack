import angular from 'angular';
import template from './app.html';

export default angular.module('app', ['ui.router'])
.config(($stateProvider) => {
	$stateProvider.state('app', {
		url: '/',
		template: '<app></app>'
	});
})
.directive('app', () => {
	return {
		template: template,
		restrict: 'E',
		scope: {},
		controller: appRootController,
		controllerAs: 'ag',
		replace: true,
	};
});


class appRootController {
	constructor($interpolate) {
	}
}
