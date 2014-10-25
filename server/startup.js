Meteor.startup(function(){
	if(questions.find().count() == 0){
		questions.insert({que:"This is the First Question ",op1:"Frst option",op2:"Second option",op3:"Third option",op4:"Fourth option",active:false})
		questions.insert({que:"This is the Second Question ",op1:"Frst option",op2:"Second option",op3:"Third option",op4:"Fourth option",active:false})
		questions.insert({que:"This is the Third Question ",op1:"Frst option",op2:"Second option",op3:"Third option",op4:"Fourth option",active:false})
		questions.insert({que:"This is the Fourth Question ",op1:"Frst option",op2:"Second option",op3:"Third option",op4:"Fourth option",active:false})
		questions.insert({que:"This is the Fifth Question ",op1:"Frst option",op2:"Second option",op3:"Third option",op4:"Fourth option",active:true})
	}

	/*var uid=Accounts.onCreateUser(function(options,user){
		return user;
	});
	console.log(uid);*/
})