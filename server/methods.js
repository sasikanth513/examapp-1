Meteor.methods({
	'userAnswer':function(qid,answer){
		console.log("method called");
		var userExists=userAnswers.find({userId:this.userId});
		if(userExists.count()>0){

			var alreadyAnswered=userAnswers.find({answers:{$elemMatch:{questionId: qid}}});
			if(alreadyAnswered.count()>0){
				console.log("answered");
				return "answered";
			}
			else{
				var result=userAnswers.update({userId:this.userId},{$addToSet:{answers:{"questionId":qid,"selectedOption":answer}}});
				return result;
			}
		}
		else{
			var resilt=userAnswers.insert({userId:this.userId,answers:[{"questionId":qid,"selectedOption":answer}]});
			return resilt;
		}
	},
	'ActiveQuestion':function(qid){
		var cursor=questions.find({active:true});
		cursor.forEach(function(doc){
			questions.update({_id:doc._id},{$set:{active:false}});
		});
		questions.update({_id:qid},{$set:{active:true}});
		return true;
	}
})