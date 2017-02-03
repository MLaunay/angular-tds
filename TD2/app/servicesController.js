angular.module("ServicesApp").controller("ServicesController",function(){
	
	this.codepromo = false;
	
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
	
	
});