angular.module("ContactApp").directive("contactElem",function(){
	return {
		restrict : 'EA',
		templateUrl: "app/templateTableau.html",		   
	    scope: {contact:'=',update:'&',delete:'&'}
	
}});

angular.module("ContactApp").directive("frmContact",function(){
	return {
		restrict : 'EA',
		templateUrl: "app/templateFrmContact.html",		   
	    scope: {contact:'=',update:'&',edit:'='}
	
}});
