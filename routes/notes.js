const notes = require('express').Router();
const app = require('express')();
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const {} = require('../helpers/uuid');



// GET route to retrieve notes
app.get('/notes.json', (req, res) => {
    console.info(`${req.method} request recieved for notes`);
    readFromFile('/db/notes.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/', (req, res) => {
    console.info(`${req.method} has added a note`);
    const { noteTitle, noteText } = req.body;
    if (noteTitle && noteText) {
        const newNote = {
            noteTitle,
            noteText,
            note_id: uuid(),
        };
        
        readAndAppend(newNote, '/db/notes.json');

        const response = {
            status: 'succeeded',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error taking note');
    }
});

module.exports = notes;
    