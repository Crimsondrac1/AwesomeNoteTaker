const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../db/db.json');
const { createNote, findId, editNote, delNote } = require('../../lib/action');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {

    // creates new note if id exists, otherwise edits existing note
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }

    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const note = findId(req.params.id, notes);

    delNote(note, notes);
    res.json();
});

module.exports = router;