var Notes = require('./models/notes');
var Links = require('/models/links');
var Images = require('./models/images');

exports.get_notes = (req,res)=>{

    Notes.find({}).then(note=>{
      res.render('notes',{
        note: notes
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
    res.redirect('/notes',{
      msg: "Successfully Added"
    });
  }).catch(error =>{
    console.log('could not save data'+ error);
  });


};
exports.update_note = (req,res)=>{
  Notes.findOne({_id: req.params.id}).then(note =>{
        note.name =  req.body.name;
        note.content = req.body.content;
        note.save(updatedNote =>{
    res.redirect('/notes',{
      msg: "Successfully Updated"
    });
  });
});
}

exports.delete_note = (req,res,next)=>{


Notes.remove({_id: req.params.id})
.then(result=>{

        res.redirect('/note',{
          msg:"Successfully Deleted"
        });
      });


}
