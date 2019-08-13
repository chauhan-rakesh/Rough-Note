var home = require('../app/controllers/home');
var notes = require('../app/controllers/notes');
var images = require('../app/controllers/images');
var links = require('../app/controllers/links');
var apihome = require('../app/api/home');
var apinotes = require('../app/api/notes');
var apilinks = require('../app/api/links');
var apiimages = require('/app/api/images');
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
    app.get('/links/:id',links.edit_links);
    app.put('/links/edit/:id',links.update_links);
    app.delete('/links/delete/:id',links.delete_links);

    //api's

    //home api

    app.get('/api/home',apihome.home);

    //notes api
    app.get('/api/notes',apinotes.get_notes);
    app.post('/api/notes',apinotes.add_notes);
    app.get('/api/notes/edit/:id',apinotes.edit_notes);
    app.put('/api/notes/edit/:id',apinotes.update_notes);
    app.delete('/api/notes/:id',apinotes.delete_notes);

    //images api
    app.get('/api/images',apiimages.get_images);
    app.post('/api/images',apiimages.add_images);

    //links api
    app.get('/api/links',apilinks.get_links);
    app.post('/api/links',apilinks.add_links);
    app.get('/api/links/:id',apilinks.edit_links);
    app.put('/api/links/edit/:id',apilinks.update_links);
    app.delete('/api/links/delete/:id',apilinks.delete_links);
}
