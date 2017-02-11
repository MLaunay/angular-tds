angular.module("ServicesApp").controller("ServicesController",["$http",function($http){
	var self = this;
	
	self.promos = "";
	
	$http.get("promos.json").then(function(data) {
		self.promos = data;
	});
	

	this.codePromo = "";	
	
	
	this.services = [
		{
			"name": "Web Development",
			"price": 300,
			"active":true
		},
		{
			"name": "Design",
			"price": 400,
			"active":false
		},
		{
			"name": "Integration",
			"price": 250,
			"active":false
		},
		{
			"name": "Formation",
			"price": 220,
			"active":false
		}
	];
	
	this.TotalRemise = 0;
	
	this.nbServices = function(){
		var cpt = 0;
		for (var i=0; i<this.services.length; i++){
			if(this.services[i].active == true){
				cpt++;
			}
		}
		
		return cpt;
		
	};
	
	this.total = function(){
		var i = 0;
		var sum = 0;
		for (i; i<this.services.length; i++){
			if(this.services[i].active == true){
				sum += this.services[i].price;
			}
		}
		return sum;
		
	};
	
	this.toggleActive = function($service){
		$service.active = !$service.active;
	};
	
	this.remise = function(){
		var str = this.codePromo;
		
		if(str != ""){
			if(self.promos.data[str] != undefined){
				this.TotalRemise = this.total()*(1-self.promos.data[str]).toFixed(7);
				console.log(this.TotalRemise);
				return (this.total() * self.promos.data[str]).toFixed(2); 
			
			}
			else {
				this.TotalRemise = this.total();
				return -2;
			}
			
		}
		
		
	}
	
	
}]);