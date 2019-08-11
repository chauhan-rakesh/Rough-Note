var mongoose = require('mongoose');

var imagesSchema = mongoose.Schema({

  img: [{type:String}],
  date : {type:Date,default: Date.now}

});
module.exports = mongoose.model('images',imagesSchema);
