sampleApp.factory('sampleDataService', [function() {
	var generateTestDataSync = function(numberOfRows) {
		var index = 0;
	    var testData = [];

		for(index = 0; index < numberOfRows;index++) {
			testData.push({
				      enabled: true,
				      status:  "F",
				      type: "type " + index,
				      id: index,
							name: "test " + index,
							units: index,
							time: new Date(),
							serviceId: index,
							driver: {id: 2, name: 'john'},
							planning: "A;B;C;D",
							description: "description " + index,
							groupID: "2345",
							externalidA: "externalidA " + index,
							externalidB: "externalidB " + index
						   });
		}

		return testData;
	};

	return {
		generateTestDataSync: generateTestDataSync
	};
}]);