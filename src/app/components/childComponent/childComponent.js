import angular from 'angular';
import template from './childComponent.html';

export default angular.module('childComponent', ['ui.router'])
.directive('childComponent', () => {
	return {
		template,
		restrict: 'E',
		scope: {},
		controller: ChildComponentController,
		controllerAs: 'ag',
		replace: true
	};
});

class ChildComponentController {
	constructor() {
	}
}
