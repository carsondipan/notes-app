const router = require('express').Router();
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const {} = require('../helpers/uuid');


// GET route to retrieve notes
app.get('/public/notes.html', (req, res) => {
    console.info(`${req.method} request recieved for notes`);
    readFromFile('/public/notes.html').then((data) => res.json(JSON.parse(data)));
  });
  app.post('/api/notes', (req, res) => {
    console.info(`${req.method} has added a note`);
    const 
  })
    