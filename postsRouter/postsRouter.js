const express = require('express');

const Posts = require('../data/db');

const router = express.Router();

// When the client makes a GET request to /api/posts:
router.get('/', (req, res) => {
    Posts.find(req.query)
    .then(posts => {
        // console.log(posts)
        res.status(200).json(posts);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: "The posts information could not be retrieved."
        });
    });
});

// When the client makes a POST request to /api/posts:
router.post('/', (req, res) => {
    const {title, contents} = req.body;
    Posts.insert(req.body)
    .then(post => {
        if (!title || !contents) {
            res.status(400).json({
                errorMessage: "Please provide title and contents for the post."
            })
        } else {
            console.log(post);
            res.status(201).json(post);
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: "There was an error while saving the post to the database"
        });
    });
});

module.exports = router;