Meteor.publish("CurrentQuestion",function(){
	return questions.find({active:true});
});
Meteor.publish("AllQuestions",function(){
	return questions.find({});
});