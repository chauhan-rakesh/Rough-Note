const multer = require('multer');
const path   = require('path');
/** Storage Engine */
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/files');
  },
  filename: function (req, file, callback) {
    callback(null, new Date().getTime().toString()+'-'+file.fieldname+path.extname(file.originalname));
  }
});
//init
const upload =  multer({
  storage:storage

}).array('img',15);
var validateFile = function(file, cb ){
  allowedFileTypes = /jpeg|png|gif|jpg/;
  const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType  = allowedFileTypes.test(file.mimetype);
  console.log(extension+"  sjks"+file.mimetype);
  if(extension){
    return cb(null, true);
  }else{
    cb("Invalid file type. only apk is allowed.")
  }
}
module.exports = upload;
