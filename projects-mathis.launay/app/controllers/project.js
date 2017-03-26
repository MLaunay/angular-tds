module.exports = function($daoService,routeParams){
	$(function () {
	 	$('.ui.dropdown').dropdown();
	});
	var self = this;
	self.daoService = $daoService;
	
	self.params = routeParams;
	self.project = $daoService.getProjectStories(routeParams._id)[0].project;
	self.devs = $daoService.getDevs()._embedded;
	console.log($daoService.getProjectStories(routeParams._id));
	self.dev;
	
	self._stories = $daoService.getProjectStories(routeParams._id);
	
	console.log(self._stories);
	self.isStoryCompleted = function(_idStory){
    var result = false;
    for(var i=0; i < self._stories.length; i++){

        if (self._stories[i]._id.$oid == _idStory) {
            var tasks = self._stories[i].tasks;
            if(tasks.length== 0){
                result = true;
            }
            else {

                result = true;
                for (var j = 0; j < tasks.length; j++) {
                    if (tasks[j].closed == false)
                        result=false;
                }
            }
        }
    }
    return result;
}
	
	self.setDev = function(dev,story){
		console.log(self._stories);
		var i = 0;
		while (i< self._stories.length && self._stories[i]._id.$oid != story._id.$oid){
				i++;
			
		}
		
		if(self._stories[i]._id.$oid == story._id.$oid){
			self._stories[i]["developer"] = dev;
		}
	};
	
}; 