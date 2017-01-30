angular.module("NoteApp").controller("NoteController",['$cookies', function($cookies){
	
	this.info = "";
	this.status = 1;
	this.saved = $cookies.get("message");
	if(this.saved){
		this.messageNote = this.saved;
	}
	else {
		this.messageNote = "";
	}
	
	this.clear = function(){
		this.messageNote = "";
	};
	this.count = function(){
		
		return 100 - this.messageNote.length;;
	};
	this.save = function(){
		if (this.count() >= 0){
            $cookies.put('message', this.messageNote);
            this.info = "Note sauvegardée";
            
        }
		
	};
	this.modifie = function(){
		if(this.messageNote != this.saved){
			this.info = "Note modifiée";
		}
	};
}]);