var upload = require('../helpers/upload.js');
var Images = require('../models/images');
var dateFormat = require('dateformat');

exports.get_images = (req,res)=>{
  var msg = req.query.msg;
  Images.find({}).then(images=>{
    res.json({
      "images":images,
      "msg":msg
    });
  });

}

exports.add_images = (req,res)=>{
  upload(req, res,(error) => {
	      if(error){
					console.log(error);
	         res.redirect('/aaa');
	      }else{
          console.log(req.files);
	        if(req.files == undefined){

	          res.redirect('/bbb');
	        }else{
            var day =dateFormat(Date.now(), "yyyy-mm-dd HH:MM:ss");
              console.log(req.files);
              var img = [];
              for (var i = 0; i < req.files.length; i++) {
                console.log(req.files[i].filename);
                img[i]= "files/"+req.files[i].filename;
              }


	          var app  = new Images({
              img:img,
              date : day
            });
	          app.save(function(error){
	            if(error){
                res.json({"error": "Some error occured",
                          "upload": false
                          });
	              throw error;
	            }else{
                res.json({"msg":"Successfully Uploaded"});

              }
	         });
	      }
	    }
	  });
}
