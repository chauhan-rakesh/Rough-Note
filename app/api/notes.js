var Notes = require('../models/notes');
var Links = require('../models/links');
var Images = require('../models/images');
var dateFormat = require('dateformat');

exports.get_notes = (req,res)=>{
var msg = req.query.msg;
  var perPage = 10
    , page = Math.max(0, req.query.page) ;
    if(req.query.page != '0' || req.query.page === undefined){
      page = page-1;
    }
    Notes.find({}).limit(perPage)
    .skip(perPage * page)
    .then(note=>{

      if(page=== 0){
        page++;
      }else{
        page ++;
      }
      var next = page+1;
      var previous = page-1;

      res.json({

        "previous":previous,
        "next":next,
        "note": note,
        "msg" : msg,
        "page":page

      })
    });
};

exports.add_notes = (req,res)=>{

  var day =dateFormat(Date.now(), "yyyy-mm-dd HH:MM:ss");
console.log(req.body === {});
    if(req.body.content === undefined ){
      res.status(400);
      res.json({"error":"empty body"});
    }else{
      var newNotes =new Notes({
        name: req.body.name,
        content: req.body.content,
        date: day
      });

      newNotes.save().then(savedNotes =>{
        res.json({"msg":"Successfully Added"});
      }).catch(error =>{
        res.status(500);
        res.json({"error":"some eror occured"});
        console.log('could not save data'+ error);
      });
    }
};

exports.edit_notes = (req,res,next)=>{

    Notes.findOne({_id: req.params.id}).then(note=>{
        res.status(200);
        res.json({
          "note":note
        })
    });

}
exports.update_note = (req,res,next)=>{
  Notes.findOne({_id: req.params.id}).then(note =>{
        note.name =  req.body.name;
        note.content = req.body.content;
        note.save(updatedNote =>{
    res.json({"msg": "Successfully Updated"});
  });
});
}

exports.delete_note = (req,res,next)=>{


Notes.remove({_id: req.params.id})
.then(result=>{
      res.json({
            "msg": "Successfully Deleted",
            "deleted":true
            });
      });


}
