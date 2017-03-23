angular.module("CalculatriceApp").directive("boutonCalc",function(){
	return {
		restrict : 'EA',
		templateUrl: "app/templateBouton.html",		   
	    scope: {value:'='},
		template : '<input type="button" value="{{value}}">',
		link : function(scope,elem,attr){
			switch(scope.value){
				case ' ' : 
					element.replaceWith('<span class="space">&nbsp;</span>');
				break;
			}
			
		}
	
}});