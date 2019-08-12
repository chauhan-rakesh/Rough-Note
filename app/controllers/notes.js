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

      res.render('notes',{
        note: note,
        msg : msg,
        page:page,
        next:next,
        previous:previous
      })
    });
};

exports.add_notes = (req,res)=>{

  var day =dateFormat(Date.now(), "yyyy-mm-dd HH:MM:ss");

  var newNotes =new Notes({
    name: req.body.name,
    content: req.body.content,
    date: day
  });

  newNotes.save().then(savedNotes =>{
    res.redirect('notes/?msg='+"Successfully Added");
  }).catch(error =>{
    console.log('could not save data'+ error);
  });


};

exports.edit_notes = (req,res,next)=>{

    Notes.findOne({_id: req.params.id}).then(note=>{
        res.render('note_edit',{
          note:note,
          msg:undefined
        });
    });

}
exports.update_note = (req,res,next)=>{
  Notes.findOne({_id: req.params.id}).then(note =>{
        note.name =  req.body.name;
        note.content = req.body.content;
        note.save(updatedNote =>{
    res.redirect('/notes/?msg='+"Successfully Updated");
  });
});
}

exports.delete_note = (req,res,next)=>{


Notes.remove({_id: req.params.id})
.then(result=>{

        res.redirect('/notes/?msg='+"Successfully Deleted");
      });


}
