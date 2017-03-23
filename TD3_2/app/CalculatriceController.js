angular.module("CalculatriceApp").controller("CalculatriceController",['CalculatriceService',function($service){
	
	self = this;
	
	self.isOperateur = function(var chaine){
		console.log("je suis dans le traitement");
		if(chaine == "(" || chaine == ")" || chaine == "<-" || chaine == "CE" 
		|| chaine == "C" || chaine == "RM" || chaine == "Off" ){
			console.log("faux");
			return false;
		}
		else {
			if(parseInt(chaine) == chaine){
				console.log("faux");
				return false;
			}
			else {
				console.log("vrai");
				return true;
			}
		}
	};
	
	
			

	
	
	
	
	
}]);