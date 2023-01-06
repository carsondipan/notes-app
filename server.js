const express = require('express');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const uuid = require('./helpers/uuid')

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/')

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
})