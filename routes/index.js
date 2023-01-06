const express = require('express');

const notesRouter = require('./notes');

const app = express ();

app.use('/notes', notesRouter);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = app;
