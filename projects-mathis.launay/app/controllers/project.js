module.exports = function($daoService,routeParams){
	$(function () {
	 	$('.ui.dropdown').dropdown();
	});
	var self = this;
	self.daoService = $daoService;
	
	self.params = routeParams;
	self.project = $daoService.getProjectStories(routeParams._id)[0].project;
	self.devs = $daoService.getDevs()._embedded;
	console.log($daoService.getProjectStories(routeParams._id));
	self.dev;
	
	self.setDev = function(dev,story){
		
		
	};
	
}; 