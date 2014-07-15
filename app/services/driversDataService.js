sampleApp.factory('driversDataService', [function() {
  var getDriversLookup = function(numberOfRows) {
    var index = 0;
      var driversData = [
          {
            id: 1,
            name: 'John Doe'
          },
          {
            id: 2,
            name: 'Bruce Delaware'
          },
          {
            id: 2,
            name: 'Jose Sunbird'
          },

      ];


    return driversData;
  };

  return {
    getDriversLookup: getDriversLookup
  };
}]);