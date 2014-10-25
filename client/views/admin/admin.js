Template.admin.helpers({
	'questions':function(){
		return questions.find({},{que:1});
	},
	'active':function(){
		if(this.active){
			return true;
		}
		else{
			return false;
		}
	}
});

Template.admin.events({
	'click .publish':function(evt){
		var qid=evt.currentTarget.id;
		Meteor.call("ActiveQuestion",qid,function(e,r){
			if(!e){
				alert("question published");
			}
		})
	}
})