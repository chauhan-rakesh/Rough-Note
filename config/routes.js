var home = require('../app/controllers/home');
var notes = require('../app/controllers/notes');
var images = require('../app/controllers/images');
var links = require('../app/controllers/links');
//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/', home.home);//home
    app.get('/home', home.home);//home

      //get,add,update and delete notes
    app.get('/notes',notes.get_notes);
    app.post('/notes',notes.add_notes);
    app.get('/notes/edit/:id',notes.edit_notes);
    app.put('/notes/edit/:id',notes.update_note);
    app.delete('/notes/:id',notes.delete_note);

    //get,add,update and delete notesSchema
    app.get('/images',images.get_images);
    app.post('/images',images.add_images);
    // app.get('/images/edit/:id',images.edit_images);
    // app.put('/images/edit/:id',images.update_images);
    // app.delete('/images/:id',images.delete_images);

    //get,add,update and delete notes
    app.get('/links',links.get_links);
    app.post('/links',links.add_links);

}
