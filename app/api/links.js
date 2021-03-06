// link api
var Links = require('../models/links');
var Images = require('../models/images');
var dateFormat = require('dateformat');


exports.get_links = (req,res)=>{
    var msg = req.query.msg;
    Links.find({}).then(link=>{
      res.json({
        "links":link,
        "msg":msg
      });
    });

}

exports.add_links = (req,res)=>{

console.log(req.body.url.split(","));
var day =dateFormat(Date.now(), "yyyy-mm-dd HH:MM:ss");

var newLinks =new Links({
  url: req.body.url.split(","),
  date: day
});

newLinks.save().then(savedLinks =>{
  res.json({"msg":"Successfully Added"});
}).catch(error =>{
  console.log('could not save data'+ error);
  res.status(400);
  res.json({"error":"Some Error occured!"});
});


}


exports.edit_links = (req,res,next)=>{

    Links.findOne({_id: req.params.id}).then(link=>{
        res.json({
          "link":link,
          "msg":undefined
        });
    });

}
exports.update_links = (req,res,next)=>{
  Links.findOne({_id: req.params.id}).then(link =>{
        link.url =  req.body.url;
        link.save(updatedLink =>{
    res.json({"msg":"Successfully Updated"});
  });
});
}

exports.delete_links = (req,res,next)=>{


Links.remove({_id: req.params.id})
.then(result=>{

        res.json({"msg":"Successfully Deleted"});
      });


}
