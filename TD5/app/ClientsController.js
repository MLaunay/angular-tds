angular.module("MainModule").controller("ClientsController", ["DAOService", function(daoservice){
    
	self = this;
	
	self.clients = daoservice.clients;
	
	
	
}]);