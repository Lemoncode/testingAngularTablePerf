sampleApp.controller('NgGridSolutionController', ['$scope', 'sampleDataService', 'driversDataService',
	        function NgGridSolutionController($scope, sampleDataService, driversDataService){	

  $scope.driversLookupData = driversDataService.getDriversLookup();
  $scope.testData = sampleDataService.generateTestDataSync(5000);  

  var cellCheckBoxTemplate = '<input type="checkbox" ng-checked="row.entity.enabled==true" /></div>';

  $scope.cellDriverEditableTemplate = '<div class="typeaheadcontainer"><input type="text" ' +
                                            'class="typeaheadcontrol"' +
                                            'data-ng-model="row.entity.driver" ' +
                                            'data-typeahead="name as driver.name for driver in driversLookupData | filter:$viewValue | limitTo:8" ' +
                                            'data-ng-required="true" ' +
                                            'data-typeahead-editable ="false"' +
                                            'data-typeahead-on-select="driverTypeaheadSelected(row.entity, $item)" ' +
                                            '/></div>';

	
 $scope.driverTypeaheadSelected = function(entity, selectedItem) {
            entity.driver = selectedItem;
 };


  $scope.gridOptions = {
                          data: 'testData',
                          enableRowSelection: false,
                          //enableCellEditOnFocus: true,
                          multiSelect: false,
                          columnDefs: [
                            {
                              field: 'enabled',
                              displayName: 'Enabled',
                              cellTemplate : cellCheckBoxTemplate,
                              enableCellEdit: false
                            },
                            {
                              field: 'status',
                              displayName: 'Status',
                              enableCellEdit: false
                            },
                            {
                              field: 'type',
                              displayName: 'Type',
                              enableCellEdit: false
                            },
                            {
                              field: 'id',
                              displayName: 'Id',
                              enableCellEdit: false
                            },
                            {
                              field: 'name',
                              displayName: 'Name',
                              enableCellEdit: false
                            },
                            {
                              field: 'units',
                              displayName: 'Units',
                              enableCellEdit: false
                            },
                            {
                              field: 'time',
                              displayName: 'Time',
                              enableCellEdit: false
                            },
                            {
                              field: 'serviceId',
                              displayName: 'Service',
                              enableCellEdit: false
                            },
                            {
                              field: 'driver.name',
                              displayName: 'Driver',
                              enableCellEditOnFocus: true,
                              //editableCellTemplate: $scope.cellDriverEditableTemplate,
                              cellTemplate: $scope.cellDriverEditableTemplate
                            },
                            {
                              field: 'planning',
                              displayName: 'Planning',
                              enableCellEdit: false
                            },
                            {
                              field: 'description',
                              displayName: 'Description',
                              enableCellEdit: false
                            },
                            {
                              field: 'groupID',
                              displayName: 'GroupID',
                              enableCellEdit: false
                            },
                            {
                              field: 'externalidA',
                              displayName: 'Externalid A',
                              enableCellEdit: false
                            },
                            {
                              field: 'externalidB',
                              displayName: 'Externalid B',
                              enableCellEdit: false
                            }
                          ]
                       };

}]);