var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Project = require('./../models/Project.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Project.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

router.post('/', function(req, res, next) {
  console.log(req);
  Project.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Project.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;