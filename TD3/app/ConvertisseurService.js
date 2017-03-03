
angular.module("ConvertisseurApp").service("ConvertisseurService",['$http', function($http){

	self = this;
	
	
	
	self.historique = [];
	
	self.update = function(from,to,what,hasHisto,result){
		
		
	};
	
	var conversion={from : //monnaie1, 
        to : //monnaie2,    
        amount : function(){ //retourne le montant (tx* somme) }, 
        initialAmount : function(){ //Retoune le montant avec tx initial * somme},
        delta : //écart Avec première requête (tx actuel - tx initial) * somme 
        rate : //tx actuel, 
        what : //Somme, date : //date & heure de la requête, 
        update: //Flag pour "en cours de mise à jour" (requête ajax), 
        initialRate : //tx initial  : invariant depuis la première requête
        };
		
	
	
}]);
