const express = require("express");
const fs = require("fs");
const path = require("path");
const router = require('express').Router();
const store = require("../db/db.json")

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router
    .route("/notes")

    .get(function (req, res) {
        res.json(store);
    })

    .post(function (req, res) {
        // let nNote = req.body;
        
        let maxId = store.length + 1;
        for (let i = 0; i < store.length; i++) {
            let uNote = store[i];

            if (uNote.id > maxId) {
                maxId = uNote.id;
            }
            

        }
 
        req.body.id = maxId + 1;
        store.push(req.body)

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(store), function (err) {

            if (err) {
                return console.log(err);
            }
            res.send("Note Saved");
        });
        res.json(newNote);
    });

    router
        .delete("/notes/:id", function (req, res) {
        for (let i = 0; i < store.length; i++) {
    
            if (store[i].id == req.params.id) {
                store.splice(i, 1);
                break;
            }
        }
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(store), function (err) {
    
            if (err) {
                return console.log(err);
            } else {
                res.send("Note Deleted");
            }
        });
        res.json(store);
    });
    
    module.exports = router;