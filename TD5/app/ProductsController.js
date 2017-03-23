angular.module("AuthModule").controller("ProductsController", ["DAOService", function(daoservice){
    
	self = this;
	
	self.products = daoservice.products;
	
	
	
}]);