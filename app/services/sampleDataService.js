sampleApp.factory('sampleDataService', [function() {
	var generateTestDataSync = function(numberOfRows) {
		var index = 0;
	    var testData = [];

		for(index = 0; index < numberOfRows;index++) {
			testData.push({
				      id: index,
							name: "test " + index,
							description: "description " + index,
							otherfieldA: "otherfieldA " + index,
						   });
		}

		return testData;
	};

	return {
		generateTestDataSync: generateTestDataSync
	};
}]);