angular.module("ListesApp").controller("ListesController",function(){
	
	self = this;
	
	self.dispoItems = 
	[
        {
            "url": "http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/",
            "title": "50 Must-have plugins for extending Twitter Bootstrap",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/",
            "title": "Making a Super Simple Registration System With PHP and MySQL",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/08/slideout-footer-css/",
            "title": "Create a slide-out footer with this neat z-index trick",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/06/digital-clock/",
            "title": "How to Make a Digital Clock with jQuery and CSS3",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/05/diagonal-fade-gallery/",
            "title": "Smooth Diagonal Fade Gallery with CSS3 Transitions",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/",
            "title": "Mini AJAX File Upload Form",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/04/services-chooser-backbone-js/",
            "title": "Your First Backbone.js App � Service Chooser",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg"
        }
    ]
	
	self.includedItems = [];
	
	self.selectedDispoItems = [];
	
	self.selectedIncludedItems = [];
	
	self.step = 1;
	
	self.addToIncluded = function(){

		
		for(var i = 0; i<self.selectedDispoItems.length;i++){
			self.includedItems.push(self.selectedDispoItems[i]);
			self.dispoItems.splice(self.dispoItems.indexOf(self.selectedDispoItems[i]),1);
			
		}
	};
	
	self.addAllToIncluded = function(){
		self.dispoItems.push.apply(self.includedItems,self.dispoItems);
		self.dispoItems=[];
	};
	
	self.removeFromIncluded = function(){
		
		for(var i = 0; i<self.selectedIncludedItems.length;i++){
			self.dispoItems.push(self.selectedIncludedItems[i]);
			self.includedItems.splice(self.includedItems.indexOf(self.selectedIncludedItems[i]),1);
		}
		
		
	};
	
	self.RemoveAllFromIncluded = function(){
		
		self.includedItems.push.apply(self.dispoItems,self.includedItems);
		self.includedItems=[];
		
		
	};
	
	
	
});