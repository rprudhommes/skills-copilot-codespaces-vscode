// Create web server

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// Get comments
router.get('/', function(req, res) {
  Comment.find({}, function(err, comments) {
    if (err) {
      res.send(err);
    } else {
      res.json(comments);
    }
  });
});

// Get comment by id
router.get('/:id', function(req, res) {
  Comment.findById(req.params.id, function(err, comment) {
    if (err) {
      res.send(err);
    } else {
      res.json(comment);
    }
  });
});

// Create comment
router.post('/', function(req, res) {
  var comment = new Comment({