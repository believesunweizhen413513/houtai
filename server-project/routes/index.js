var express = require('express');
var router = express.Router();
const {
  find,
  insert,
  updateOne,
  remove
} = require('../db/db');
/* GET home page. */

router.get('/ordeing', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let { usercard, tel } = req.query

  if (usercard && tel) {
    var reg = /^(\d{17}|\d{14})[\dx]$/;
    var isok = reg.test(usercard);
    if (isok) {
      console.log(isok);
      var reg = reg = /^1[3-9]\d{9}$/;
      var isok = reg.test(tel);
      if (isok) {
        console.log(isok);

        let data = await updateOne('admit', { usercard: usercard }, { tel: tel });
        res.send('2');
        // res.json(data);
        console.log(data.result.ok);

      } else {
        res.send('0')
      }
    } else {
      res.send('0');
    }
  }

});

router.get('/order', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let { usercard, password } = req.query
  let data = await find('admit', { usercard, password });
  res.json(data);
  //  console.log(data);

});
router.get('/uporder', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let { usercard } = req.query
  let data = await find('admit', { usercard });
  res.json(data);
});
router.get('/xiugai', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let sum = req.query
  console.log(req.query);
  
  let data = await find('admit', { usercard:sum.usercard });
  console.log(data.length);
  
  if(data.length>0){
    updateOne('admit', {qq:sum.qq }, {tel:sum.tel}).then(()=>{
       res.send('2')
    });
  }else{
    res.send('0')
  }
  // console.log(data);
  // res.json(data);
});
router.get('/pass', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let sum = req.query
  let data = await find('admit', { password: sum.oldpass, usercard: sum.usercard });
  res.json(data);

});
router.get('/chanpass', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let sum = req.query
  if (sum.usercard && sum.newpass) {
    var reg = /^(\d{17}|\d{14})[\dx]$/;
    var isok = reg.test(sum.usercard);
    if (isok) {
      var reg = /^\S{6,20}$/;
      var isok = reg.test(sum.newpass);
      if (isok) {
        // console.log(isok);
        let data = await updateOne('admit', { usercard: sum.usercard }, { password: sum.newpass });
        if (data.result.ok == 1) {
          res.send('2')
        }
      } else {
        res.send('0')
      }
    } else {
      res.send('0')
    }
  }

  // console.log(data.result.ok);

});


module.exports = router;