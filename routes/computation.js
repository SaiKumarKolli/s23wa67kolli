var express = require('express');
var router = express.Router();

var ran=Math.random()*100;
var a=0;
var b=0;
var c=0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  a=Math.log2(ran);
  b=Math.cosh(ran);
  c=Math.floor(ran);
  
  res.send(`log2 applied to ran is: ${a}, cosh applied to ran is: ${b} , floor applied to ran is: ${c}`);


});

module.exports = router;