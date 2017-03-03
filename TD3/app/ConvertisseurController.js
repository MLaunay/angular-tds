angular.module("ConvertisseurApp").controller("ConvertisseurController",['$http', function($http){

	self = this;
	
	$http.get('app/data/currencymap.json').
    then(function(response) {
        self.currencies = response.data;
		self.from = self.currencies["EUR"];
		self.to = self.currencies["USD"];
    },
    function(response) {
        console.log("Erreur avec le statut Http : "+response.status);
    });
	
	self.what;
	self.result;
	
	self.getResult = function(){
		$http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code, {jsonpCallbackParam: 'callback'})
		.then(function(response) {
        self.result=response.data[self.from.code+'_'+self.to.code].val;
		
	});
		
	};
	
	self.swap = function(){
		self.what = self.from;
		self.from = self.to;
		self.to = self.what;
		
	};
	
	


	
}]);
