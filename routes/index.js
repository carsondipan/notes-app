const router = require('express').Router();
const notesRouter = require('./notesRouter');

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);
