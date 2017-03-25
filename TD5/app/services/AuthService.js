angular.module("MainModule").service("AuthService", ["$window", function($window) {
    
	var self = this;
	
	this.users = ["User1","User2","User3","User4"];
	
	this.activeUser;
	
	this.checkLogin = function(login){
		if(this.users.indexOf(login) != -1){
			this.activeUser = login;
			$window.location.href = 'in/';
		}
		else {
			console.log("Mauvais login");
		}
		
	};
	
	this.isAuth = function(){
		if(this.activeUser != null){
			return true;
		}
		else{
			return false;
			
		}
		
	};
}]);