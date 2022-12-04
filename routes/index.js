var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});

router.get('/data', function(req, res, next) {
  res.render('data', { title: 'data' });
});
// router.get('/data', function(req, res,next) {

//   res.render('/data.json' );
  
// });


module.exports = router;
