module.exports = function(){
    
	var self = this;
	
			var _projects={  
				   "_embedded":[  
					  {  
						 "_id":{  
							"$oid":"58d038b705d0b0b35f9764da"
						 },
						 "name":"Open-beer",
						 "descriptif":"A free, public database and API for beer information.",
						 "startDate":"March 20, 2017 21:16:55"
					  },
					  {  
						 "_id":{  
							"$oid":"58d038b705d0b0b35f9764d9"
						 },
						 "name":"Boards analysis",
						 "descriptif":"AngularJS application + REST API",
						 "startDate":"March 20, 2017 21:16:55",
						 "owner":{  
							"identity":"Rod Johnson",
							"_id":{  
							   "$oid":"58d038b705d0b0b35f9764d5"
							}
						 }
					  },
					  {  
						 "_id":{  
							"$oid":"58d038b705d0b0b35f9764d8"
						 },
						 "name":"Boards admin",
						 "descriptif":"Administration interface for Boards app with javaFX",
						 "startDate":"March 20, 2017 21:16:55",
						 "owner":{  
							"identity":"Linus Torvalds",
							"_id":{  
							   "$oid":"58d038b705d0b0b35f9764d7"
							}
						 }
					  }
				   ],
				   "_id":"Project",
				   "_returned":3
				}
		 
		var _stories={"_embedded":[
		{"_id":{"$oid":"58d038b705d0b0b35f9764df"},"code":"Beer1","descriptif":"affichage de la liste des bières /beers (L'affichage de la bière n'affiche pas le brasseur associé)",
			"project":{"name":"Open-beer","descriptif":"A free, public database and API for beer information.","startDate":"March 20, 2017 21:16:55","_id":{"$oid":"58d038b705d0b0b35f9764da"}},
			"developer":{"identity":"Linus Torvalds","_id":{"$oid":"58d038b705d0b0b35f9764d7"}},
			"tags":[{"title":"bug","color":"#EE0701","_id":{"$oid":"58d038b705d0b0b35f9764e0"}}],
			"tasks":[]},
		{"_id":{"$oid":"58d038b705d0b0b35f9764de"},"code":"Dev1","descriptif":"En tant que développeur, je peux consulter mes projets",
			"project":{"name":"Boards analysis","descriptif":"AngularJS application + REST API","startDate":"March 20, 2017 21:16:55","owner":{"identity":"Rod Johnson","_id":{"$oid":"58d038b705d0b0b35f9764d5"}},"_id":{"$oid":"58d038b705d0b0b35f9764d9"}},
			"developer":{"identity":"Linus Torvalds","_id":{"$oid":"58d038b705d0b0b35f9764d7"}},
			"tags":[{"title":"duplicate","color":"#CCCCCC","_id":{"$oid":"58d038b705d0b0b35f9764e1"}}],
			"tasks":[{"content":"Descriptif cas d'utilisation","closed":true},{"content":"Interfaces","closed":true}]},
		{"_id":{"$oid":"58d038b705d0b0b35f9764dd"},"code":"E140","descriptif":"En tant que créateur, je souhaite gérer les utilisateurs [methods]",
			"project":{"name":"Boards admin","descriptif":"Administration interface for Boards app with javaFX","startDate":"March 20, 2017 21:16:55",
			"owner":{"identity":"Linus Torvalds","_id":{"$oid":"58d038b705d0b0b35f9764d7"}},"_id":{"$oid":"58d038b705d0b0b35f9764d8"}},
			"tags":[],"tasks":[]},
		{"_id":{"$oid":"58d038b705d0b0b35f9764dc"},"code":"E120","descriptif":"En tant que créateur, je veux créer / Modifier des quiz [methods]",
			"project":{"name":"Boards admin","descriptif":"Administration interface for Boards app with javaFX","startDate":"March 20, 2017 21:16:55",
			"owner":{"identity":"Linus Torvalds","_id":{"$oid":"58d038b705d0b0b35f9764d7"}},"_id":{"$oid":"58d038b705d0b0b35f9764d8"}},
			"tags":[],
			"tasks":[{"content":"Implémentations méthodes REST","closed":true},{"content":"Implémentations méthodes REST (suite et fin)","closed":true}]},
		{"_id":{"$oid":"58d038b705d0b0b35f9764db"},"code":"B22","descriptif":"En tant que créateur, je veux ajouter et gérer les réponses d'une question [methods]",
			"project":{"name":"Boards admin","descriptif":"Administration interface for Boards app with javaFX","startDate":"March 20, 2017 21:16:55",
			"owner":{"identity":"Linus Torvalds","_id":{"$oid":"58d038b705d0b0b35f9764d7"}},"_id":{"$oid":"58d038b705d0b0b35f9764d8"}},
			"developer":{"identity":"Rod Johnson","_id":{"$oid":"58d038b705d0b0b35f9764d5"}},
			"tags":[],
			"tasks":[]}
		],"_id":"Story","_returned":5};
		 
		var _devs={"_embedded":[
		{"_id":{"$oid":"58d038b705d0b0b35f9764d7"},"identity":"Linus Torvalds"},
		{"_id":{"$oid":"58d038b705d0b0b35f9764d6"},"identity":"James Gosling"},
		{"_id":{"$oid":"58d038b705d0b0b35f9764d5"},"identity":"Rod Johnson"}
		],"_id":"Developer","_returned":3};
		 
		var _tags={"_embedded":[
		{"_id":{"$oid":"58d038b705d0b0b35f9764e6"},"title":"wont fix","color":"#FFFFFF"},
		{"_id":{"$oid":"58d038b705d0b0b35f9764e5"},"title":"question","color":"#CC317C"},
		{"_id":{"$oid":"58d038b705d0b0b35f9764e4"},"title":"invalid","color":"#E6E6E6"},
		{"_id":{"$oid":"58d038b705d0b0b35f9764e3"},"title":"help wanted","color":"#128A0C"},
		{"_id":{"$oid":"58d038b705d0b0b35f9764e2"},"title":"enhancement","color":"#84B6EB"},
		{"_id":{"$oid":"58d038b705d0b0b35f9764e1"},"title":"duplicate","color":"#CCCCCC"},
		{"_id":{"$oid":"58d038b705d0b0b35f9764e0"},"title":"bug","color":"#EE0701"}
		],"_id":"Tag","_returned":7};
		
		self.getProjects = function(){
			return _projects;
		};
		
		self.getStories = function(){
			return _stories;
		};
		
		self.getTags = function(){
			return _tags;
		};
		
		self.getDevs = function(){
			return _devs;
		};
		
		self.getMyProjects = function(_idDev){
			var i;
			var projects = self.getProjects();
			var projectsDev = [];
			for(i= 0; i<projects._embedded.length;i++){
				if(projects._embedded[i].owner != undefined){
					if(projects._embedded[i].owner._id.$oid == _idDev){
						projectsDev.push(projects._embedded[i]);
					}
				}
			}

			return projectsDev;
		};
		
		self.getMyParticipations = function(_idDev){
			var myParticipations = [];
			var stories = self.getStories();
			for(i= 0; i<stories._embedded.length;i++){
				if(stories._embedded[i].developer != undefined){
					if(stories._embedded[i].developer._id.$oid == _idDev){
						myParticipations.push(stories._embedded[i].project);
					}
				}
				
			}
			return myParticipations;
			
		};
		
		self.getProjectStories = function(_idProject){
			var ProjectStories = [];
			
			var stories = self.getStories();
			for(i= 0; i<stories._embedded.length;i++){
				
				if(stories._embedded[i].project._id.$oid == _idProject){
					ProjectStories.push(stories._embedded[i]);
				}
			}
			return ProjectStories;
			
		};
	
	
};