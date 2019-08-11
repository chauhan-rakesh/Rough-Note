var mongoose = require('mongoose');

var linksSchema = mongoose.Schema({

  url: [{type:String}],
  date : {type:Date,default: Date.now}

});
module.exports = mongoose.model('links',linksSchema);
