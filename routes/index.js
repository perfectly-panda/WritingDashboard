var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Project = require('./../models/Project.js');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;