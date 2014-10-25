/*Template.home.events({
	'click #submitAnswer':function(e,tmpl){
		var opt=$("input[name=optionsRadios]:checked").val()
		if(opt === undefined){
			alert("select the aswer");
		}
		else{
			alert(opt);			
		}
	}
});

Template.home.helpers({
	'options':function(){
		var qid=Session.get("currentQuestionId");
		return questions.find({_id:qid});
	}
})*/