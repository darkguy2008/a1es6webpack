import angular from 'angular';
import template from './childPage.html';

export default angular.module('childPage', ['ui.router'])
.config(($stateProvider) => {
	$stateProvider.state('app.childPage', {
		url: 'childPage',
		template: '<childpage></childpage>'        
	});
})
.directive('childpage', () => {
	return {
		template,
		restrict: 'E',
		scope: {},
		controller: ChildPageController,
		controllerAs: 'ag',
		replace: true
	};
});

class ChildPageController {
	constructor(sampleService) {
		this.sampleService = sampleService;
	}
}
ChildPageController.$inject = ['sampleService'];
