module.exports = function($daoService,routeParams){
	$(function () {
	 	$('.ui.dropdown').dropdown();
	});
	var self = this;
	self.stories = $daoService.getStories()._embedded;
	
	self.getStory = function(){
		var i = 0;
		while(i < self.stories.length && self.stories[i]._id.$oid != routeParams._id){
				i++;
		}
		if(self.stories[i]._id.$oid == routeParams._id){
				return self.stories[i];
		}
	
	};
	
	
	self.devs = $daoService.getDevs();
	
	self.tags = $daoService.getTags();
	
	self.story = self.getStory();

	
	self.StoryComplete = function(){
		var cpt = 0;

		for(var i = 0; i<self.story.tasks.length;i++){
			if(self.story.tasks[i].closed != undefined){
				if(self.story.tasks[i].closed == true){
					cpt++;
				}	
			}
			
		}
		
		if(cpt == self.story.tasks.length){
			return true;
		}
	};
	
	self.setDev = function(dev){
		self.story["developer"] = dev;
		
		
	};
	
	self.toggleDone = function(task){
		var i =0;
		while (i< self.story.length && self.story.tasks[i] != task){
				i++;
			
		}
		
		if(self.story.tasks[i] == task){
			self.story.tasks[i]["closed"] = !self.story.tasks[i]["closed"];
		}
		
	};
	
	self.indexofTag = function(tag){
		console.log(self.story.tags.indexOf(tag));
		return self.story.tags.indexOf(tag);
		
	};
	
	self.toggleTag = function(tag){
		self.story.tags.push(tag);
		
	};
	
	
	
	
};   
	
	
