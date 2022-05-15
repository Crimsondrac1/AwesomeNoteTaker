const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const api = require("./routes/api")
const html = require('./routes/html');

app.use(express.static('public'));
app.use('/', html);
app.use("/api", api)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//===========================================================================
// Listening is the last thing Express should do. This sets up the server.
//===========================================================================
app.listen(PORT, function () {
    console.log("App listening on http://127.0.0.1:" + PORT);
});