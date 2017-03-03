angular.module("ConvertisseurApp").service("ConvertisseurService", function(){

	self = this;
	
	self.historique = [];
	
	self.update = function(from,to,what,hasHisto,result){
		
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
		
		var search = from.code+'_'+to.code;
		if(self.historique[search]){
			self.historique[search].date = new Date();
			self.historique[search].rate = tx;
		}else{
			self.historique[search]=conversion;
			console.log(self.historique);
		}		
	};
	
});
