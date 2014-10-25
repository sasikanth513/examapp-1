Meteor.startup(function(){
	AccountsEntry.config({
		homeRoute:'/',
		dashboardRoute:'/',
	});
	
});

Tracker.autorun(function(){
	Meteor.subscribe("CurrentQuestion");
})