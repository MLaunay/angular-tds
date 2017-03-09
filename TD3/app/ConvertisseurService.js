angular.module("ConvertisseurApp").service("ConvertisseurService", function(){

	self = this;
	
	self.historique = [];
	
	self.update = function(from,to,what,hasHisto,result){
		console.log("Je suis dans update");
		var tx = result/what;
		
		var conversion={from : from, 
        to : to,
		rate : tx, 
        amount : function(){ return this.rate*this.what; }, 
        initialAmount : function(){ return this.initialRate*this.rate;},
        delta : this.rate-this.initialRate,
        what : what, 
		date : new Date(),
        update: 1, 
        initialRate : tx
        };
		
		if(self.historique.length == 0){
			self.historique.push(conversion);
		}
		else {
			console.table(self.historique);
			var i = 0;
			while(i<self.historique.length && !(self.historique[i].from == conversion.from && self.historique[i].to == conversion.to)){
				i++;
			}
		
			if(self.historique[i].from == conversion.from && self.historique[i].to == conversion.to){
				self.historique[i].date = new Date();
				self.historique[i].delta = conversion.delta;
				self.historique[i].rate = tx;
			}
			else {
				self.historique.push(conversion);
			}
		
			console.log(self.historique);
			
			
		}
		
		
		
		
		
	};
	
});
