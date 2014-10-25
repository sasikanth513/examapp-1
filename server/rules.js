questions.allow({
	insert:function(userId,doc){
		return true;
	},
	update: function (userId, doc, fields, modifier) {
	    // can only change your own documents
	    return true;
	},
	remove: function (userId, doc) {
	    // can only remove your own documents
	   return true;
	}
})