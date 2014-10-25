Template.home.helpers({
	'hasActiveQuestion':function(){
		var res=questions.find({active:true}).count();
		if(res > 0){
			return true;
		}
		else{
			return false;
		}
	},
	'question':function(){
		setTimeout(function(){

		},10000);
		return questions.findOne({active:true});
	},
	'time':function(){
		var serverTime=TimeSync.serverTime();
		var da=new Date(serverTime);
		var str=da.getMinutes()+":"+da.getSeconds();
		return str;
	}
});

Template.home.events({
	"click .submitAnswer":function(evt){
		var selectedOption=$("input[type='radio'][name='optionsRadios']:checked").next('label:first').html();
		console.log(selectedOption);
		console.log(Meteor.userId());
		//$('input:radio:checked').next('label:first').html()
		var t=TimeSync.serverTime();
		var questionId=evt.currentTarget.id;
		Meteor.call("userAnswer",questionId,selectedOption,function(e,r){
			console.log("method called");
			if(e){
				alert("unable to save to DB");
			}
			else{
				if(r === "answered"){
					console.log("answered");
					alert("You have already answered on this question");
				}
				else{
					alert("Answer Submitted");
				}
			}
		})
	}
})