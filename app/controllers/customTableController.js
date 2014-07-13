sampleApp.controller('CustomTableController', ['$scope', 'sampleDataService', 
	        function CustomTableController($scope, sampleDataService){	

	$scope.testData = sampleDataService.generateTestDataSync(5000);	
}]);