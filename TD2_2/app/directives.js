angular.module("ContactApp").directive("contactElem",function(){
	return {
		restrict : 'EA',
		template: "<td>{{contact.nom}}</td><td>{{contact.prenom}}</td><td>{{contact.mail}}</td><td><a ng-click='update(contact)'>[...]</a></td><td><a ng-click='delete(contact)'>[X]</a></td>",		   
	    scope: {contact:'=',update:'&',delete:'&'}
	
}});

angular.module("ContactApp").directive("frmContact",function(){
	return {
		restrict : 'EA',
		templateUrl: "app/templateFrmContact.html",		   
	    scope: {contact:'=',update:'&',edit:'='}
	
}});
