"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../db/db'),
    find = _require.find,
    insert = _require.insert,
    updateOne = _require.updateOne,
    remove = _require.remove;
/* GET home page. */


router.get('/ordeing', function _callee(req, res, next) {
  var _req$query, usercard, tel, reg, isok, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _req$query = req.query, usercard = _req$query.usercard, tel = _req$query.tel;

          if (!(usercard && tel)) {
            _context.next = 22;
            break;
          }

          reg = /^(\d{17}|\d{14})[\dx]$/;
          isok = reg.test(usercard);

          if (!isok) {
            _context.next = 21;
            break;
          }

          console.log(isok);
          reg = reg = /^1[3-9]\d{9}$/;
          isok = reg.test(tel);

          if (!isok) {
            _context.next = 18;
            break;
          }

          console.log(isok);
          _context.next = 13;
          return regeneratorRuntime.awrap(updateOne('admit', {
            usercard: usercard
          }, {
            tel: tel
          }));

        case 13:
          data = _context.sent;
          res.send('2'); // res.json(data);

          console.log(data.result.ok);
          _context.next = 19;
          break;

        case 18:
          res.send('0');

        case 19:
          _context.next = 22;
          break;

        case 21:
          res.send('0');

        case 22:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/order', function _callee2(req, res, next) {
  var _req$query2, usercard, password, data;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _req$query2 = req.query, usercard = _req$query2.usercard, password = _req$query2.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(find('admit', {
            usercard: usercard,
            password: password
          }));

        case 4:
          data = _context2.sent;
          res.json(data); //  console.log(data);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/uporder', function _callee3(req, res, next) {
  var usercard, data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          usercard = req.query.usercard;
          _context3.next = 4;
          return regeneratorRuntime.awrap(find('admit', {
            usercard: usercard
          }));

        case 4:
          data = _context3.sent;
          res.json(data);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get('/xiugai', function _callee4(req, res, next) {
  var sum, data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          sum = req.query;
          console.log(req.query);
          _context4.next = 5;
          return regeneratorRuntime.awrap(find('admit', {
            usercard: sum.usercard
          }));

        case 5:
          data = _context4.sent;
          console.log(data.length);

          if (data.length > 0) {
            updateOne('admit', {
              qq: sum.qq
            }, {
              tel: sum.tel
            }).then(function () {
              res.send('2');
            });
          } else {
            res.send('0');
          } // console.log(data);
          // res.json(data);


        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get('/pass', function _callee5(req, res, next) {
  var sum, data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          sum = req.query;
          _context5.next = 4;
          return regeneratorRuntime.awrap(find('admit', {
            password: sum.oldpass,
            usercard: sum.usercard
          }));

        case 4:
          data = _context5.sent;
          res.json(data);

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router.get('/chanpass', function _callee6(req, res, next) {
  var sum, reg, isok, data;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          sum = req.query;

          if (!(sum.usercard && sum.newpass)) {
            _context6.next = 19;
            break;
          }

          reg = /^(\d{17}|\d{14})[\dx]$/;
          isok = reg.test(sum.usercard);

          if (!isok) {
            _context6.next = 18;
            break;
          }

          reg = /^\S{6,20}$/;
          isok = reg.test(sum.newpass);

          if (!isok) {
            _context6.next = 15;
            break;
          }

          _context6.next = 11;
          return regeneratorRuntime.awrap(updateOne('admit', {
            usercard: sum.usercard
          }, {
            password: sum.newpass
          }));

        case 11:
          data = _context6.sent;

          if (data.result.ok == 1) {
            res.send('2');
          }

          _context6.next = 16;
          break;

        case 15:
          res.send('0');

        case 16:
          _context6.next = 19;
          break;

        case 18:
          res.send('0');

        case 19:
        case "end":
          return _context6.stop();
      }
    }
  });
});
module.exports = router;