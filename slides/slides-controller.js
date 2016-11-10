use 'strict';

angular
	.module("app")
	.controller('SlidesController', SlidesController);
	
	 function SlidesController()
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
			}
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
}
