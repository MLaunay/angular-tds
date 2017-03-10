angular.module("ConvertisseurApp").controller("ConvertisseurController",['$http', 'ConvertisseurService',function($http,$service){

	self = this;
	self.historique = $service.historique;
	
	$http.get('app/data/currencymap.json').
    then(function(response) {
        self.currencies = response.data;
		self.from = self.currencies["EUR"];
		self.to = self.currencies["USD"];
    },
    function(response) {
        console.log("Erreur avec le statut Http : "+response.status);
    });
	
	self.what = 1;
	self.result;

	
	self.getResult = function(){
		$http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code, {jsonpCallbackParam: 'callback'})
		.then(function(response) {
        self.result=response.data[self.from.code+'_'+self.to.code].val;
		$service.update(self.from,self.to,self.what,0,self.result);
	});
		
	};
	
	self.swap = function(){
		var tmp = self.from;
		self.from = self.to;
		self.to = tmp;
		
	};
	
	self.delete = function(key){
		delete self.historique[key];
	}
	
	
	
	


	
}]);
