var home = require('../app/controllers/home');
var notes = require('../app/controllers/notes');
//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/', home.home);//home
    app.get('/home', home.home);//home

      //get,add,update and delete notes
    app.get('/notes',notes.get_notes);
    app.post('/notes',notes.add_notes);
    app.put('/notes/:id',notes.update_note);
    app.delete('/notes/:id',notes.delete_note);

}
