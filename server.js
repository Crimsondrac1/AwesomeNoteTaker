const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const api = require("./routes/api")
const html = require('./routes/html');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

app.use(express.static('public'));
app.use('/', html);
app.use("/api", api)
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


//===========================================================================
// Listening is the last thing Express should do. This sets up the server.
//===========================================================================
app.listen(PORT, function () {
    console.log("App listening on http://127.0.0.1:" + PORT);
});