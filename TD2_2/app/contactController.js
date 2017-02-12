


angular.module("ContactApp").controller("ContactController",function(){

	self = this;
	
	self.contacts = 
	[
		{
			"nom" : "QUIEDEVILLE",
			"prenom" : "Valentin",
			"mail" : "valentin.quiedeville@gmail.com",
			"deleted" : false
			
		},
		{
			"nom" : "LUCAS",
			"prenom" : "Clément",
			"mail" : "clement.lucas@gmail.com",
			"deleted" : false
			
		},
		{
			"nom" : "BASNIER",
			"prenom" : "Paul",
			"mail" : "paul.basnier@gmail.com",
			"deleted" : false
			
		}
	];
	
	self.notDeleted = self.contacts.slice();
	
	
	self.nbDeleted = 0;
	
	self.contact = null; //contact à modifier
	
	self.tmpContact = null; // contact modifie
	
	self.operation = null;
	
	self.edit = false;
	
	self.index = null;
	
	self.toUpdate = function(contact){
		self.contact = Object.assign({},contact);
		self.index = self.contacts.indexOf(contact);
		self.operation = "modification";
		self.edit = true;
	};
	
	self.toAdd = function(){
		self.operation = "ajout";
		self.edit = true;
	};
	
	self.add = function(){
		self.contacts.push(self.tmpContact);
		self.tmpContact = undefined;
		
	};
	
	self.update = function(){
		console.log("Je suis dans update");
		if(self.operation == "modification"){
			console.log("Je suis dans modif");
			self.contacts[self.index] = self.contact;
			self.edit = false;
			self.operation = null;
			
		}
		else {
			console.log("Je suis dans ajout");
			self.add();
			self.edit = false;
			self.operation = null;
		}
		
	};
	
	self.delete = function(contact){
		self.nbDeleted++;
		var position = self.notDeleted.indexOf(contact);
		console.log(position);
		self.notDeleted.splice(position,1);
		console.log(self.notDeleted);
		console.log(self.contacts);
	};
	
	self.cancelDeletions = function(){
		self.nbDeleted = 0;
		self.notDeleted = self.contacts.slice();
	};
	

	
});