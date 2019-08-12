
var Links = require('../models/links');
var Images = require('../models/images');
var dateFormat = require('dateformat');


exports.get_links = (req,res)=>{

    Links.find({}).then(link=>{
      res.render('links',{
        links:link
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
  res.redirect('links/?msg='+"Successfully Added");
}).catch(error =>{
  console.log('could not save data'+ error);
});



}
