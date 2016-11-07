import app from './app/app';
import childPage from './childPage/childPage';
import childComponent from './childComponent/childComponent';
	
export default angular.module('components', [ 
	app.name, 
	childComponent.name,
	childPage.name
]);
