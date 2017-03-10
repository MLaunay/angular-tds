angular.module("ConvertisseurApp").service("ConvertisseurService", function(){

	self = this;
	
	self.historique = {};
	
	self.update = function(from,to,what,hasHisto,result){
		
		var tx = result/what;
		var conversion={from : from, 
        to : to,
		rate : tx, 
        amount : function(){ return this.rate*what; }, 
        initialAmount : function(){ return this.initialRate*what;},
        delta : function() {return this.rate-this.initialRate;},
        what : what, 
		date : new Date().toLocaleString(),
        update: 1, 
        initialRate : tx
        };
		console.log("amount = "+conversion.amount());

		var key = self.from.code+'_'+self.to.code;
		
		if(self.historique[key]){
			//console.log("J'existe déjà");
			self.historique[key].date = new Date().toLocaleString();
			self.historique[key].delta = conversion.delta;
		}
		else {
			//console.log("Je n'existe pas déjà");
			self.historique[key] = conversion;
			//console.table(self.historique);
		}
		
	};
	
});
