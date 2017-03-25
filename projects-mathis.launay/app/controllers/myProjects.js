module.exports = function($daoService){
	var self = this;
	self.daoService = $daoService;
	self.initUser = function(){
		return self.daoService.getDevs()._embedded[0]._id.$oid;
	};
	
	self.dev = self.initUser();
	
	self.projectsOwner = self.daoService.getMyProjects(self.dev);
	self.projectsWorker = self.daoService.getMyParticipations(self.dev);
	
};   
	
	
