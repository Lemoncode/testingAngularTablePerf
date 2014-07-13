sampleApp.controller('NgGridSolutionController', ['$scope', 'sampleDataService', 
	        function NgGridSolutionController($scope, sampleDataService){	

	$scope.testData = sampleDataService.generateTestDataSync(5000);  
  $scope.gridOptions = {data: 'testData'};

}]);