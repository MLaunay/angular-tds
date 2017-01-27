angular.module("NoteApp").controller("NoteController",function(){
	this.messageNote = "";
	this.info = ["modifiée","sauvegardée"];
	this.status = 1;
	this.save = function(){
		//$cookies.put('message',messageNote);
	};
	this.clear = function(){
		this.messageNote = "";
	};
	this.count = function(){
		return 100 - this.messageNote.length;
	};	
});