use 'strict';

angular
	.module("app")
	.controller('SlidesController', ['$scope',
		function($scope)
		{
		 var ctrl = this;
		
		ctrl.$onInit = function (){
			ctrl.jobs = [
			{
				"id": 1,
				"employerName": "ADP",
				"jobTitle": "Back-End Developer Intern",
				"jobDescription": "",
				"duration": "3 Months"
			},
			{
				"id":2,
				"employerName": "Sparks Grove, A Division of North", 
				"jobTitle": "SGXU Technology Associate",
				"jobDescription": "",
				"duration": "3 Months"
			
			ctrl.message = "Clicked"
				
		}
    /**
    ctrl.gotoSession = gotoSession;
    ctrl.refresh = refresh;
    ctrl.search = search;
    ctrl.sessions = [];
    ctrl.title = 'Sessions';

    ////////////

    function gotoSession() {
      
    }

    function refresh() {
      
    }

    function search() {
      
    }
    **/
}]);
