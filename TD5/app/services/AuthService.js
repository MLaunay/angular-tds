angular.module("MainModule").service("AuthService", ["$window", function($window) {
    
	var self = this;
	
	self.users = ["User1","User2","User3","User4"];
	
	self.activeUser;
	
	self.checkLogin = function(login){
		if(self.users.indexOf(login) != -1){
			self.activeUser = login;
			$window.location.href = 'in/';
		}
		else {
			console.log("Mauvais login");
		}
		
	};
	
	self.isAuth = function(){
		if(self.activeUser != undefined){
			return true;
		}
		else{
			return false;
			
		}
		
	};
}]);