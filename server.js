const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// const notesRt = require('./routes/notesRt');
// const htmlRt = require('./routes/htmlRt');
const router = require('express').Router();
//const notesRt = require('../notes');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// router.use(notesRt);

// parse POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
// })

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});