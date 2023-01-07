const notes = require('express').Router();
const app = require('express')();
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const {} = require('../helpers/uuid');



// GET route to retrieve notes
app.get('/', (req, res) => {
    console.info(`${req.method} request recieved for notes`);
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
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

module.exports = notes;
    