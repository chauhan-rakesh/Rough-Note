var mongoose = require('mongoose');

var notesSchema = mongoose.Schema({

  name: {type:String,default : "note"},
  content: {type:String},
  date : {type:Date,default: Date.now}

});
module.exports = mongoose.model('notes',notesSchema);
