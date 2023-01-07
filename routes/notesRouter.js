const notes = require('../db/notes.json');
const app = require('express').Router();
const { router } = require('.');
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const {} = require('../helpers/uuid');



// GET route to retrieve notes
app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request recieved for notes`);
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    const { noteTitle, noteText } = req.body;
    if (req.body) {
        const newNote = {
            noteTitle,
            noteText,
            note_id: uuid(),
        };
        
        readAndAppend(newNote, './db/notes.json');
        const response = {
            status: 'success',
            body: newNote,
        };

    } else {
        res.json('Error taking note');
    }
});

module.exports = router;
    