var Project = require('../models/Project');

module.exports = function(router, passport) {
  console.log('api loaded');

/* GET /todos listing. */
router.get('/api/projects/', isLoggedIn,  function(req, res, next) {
  var user = req.user;
  
  Project.find({'_user': user._id},function (err, projects) {
    if (err) return next(err);
    res.json(projects);
  });
});

router.post('/api/projects/', isLoggedIn, function(req, res, next) {
  var user   = req.user;
  
  var project = new Project({ _user: user._id, name: req.body.name });
  
  project.save(function (err, post) {
    if (err) return next(err);
    Project.find({'_user': user._id},function (err, projects) {
      if (err) return next(err);
      res.json(projects);
    });
  });
});

/* GET /todos/id */
router.get('/api/projects/:id', isLoggedIn, function(req, res, next) {
  var user          = req.user;
  Project
   .where('_user').equals(user._id)
  .findById(req.params.id)
  .exec( function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/api/projects/:id', isLoggedIn, function(req, res, next) {
  var user          = req.user;
  Project.findByIdAndUpdate(req.body.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/api/projects/:id', isLoggedIn, function(req, res, next) {
  var user          = req.user;
  console.log(req)
  Project.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    Project.find({'_user': user._id},function (err, projects) {
      if (err) return next(err);
      res.json(projects);
    });
  });
});
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}