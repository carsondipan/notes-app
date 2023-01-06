const router = require('express').Router();
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const {} = require('../helpers/uuid');


// GET route to retrieve notes
app.get('/public/notes.html', (req, res) => {
    console.info(`${req.method} request recieved for notes`);
    readFromFile('/db/tips.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/', (req, res) => {
    console.info(`${req.method} has added a note`);
    if (req.body) {
        const newNote = {
            noteTitle,
            noteText,
            note_id: uuid(),
        };
        
        readAndAppend(newNote, './db/notes.json');

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
    