import libs from './libs';
import services from './services/services';
import components from './components/components';

angular.module('main', [ 
	services.name, 
	components.name, 
	'ui.router' 
])
.config(($stateProvider, $urlRouterProvider) => {
  	$urlRouterProvider.otherwise('/');
});

angular.bootstrap(document, ['main']);
