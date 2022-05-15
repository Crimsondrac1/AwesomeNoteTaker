const router = require('express').Router();
const notesRt = require('./notesRoutes');

router.use(notesRt);

module.exports = router;