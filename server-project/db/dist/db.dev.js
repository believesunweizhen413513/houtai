"use strict";

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
var dbName = 'Manergents'; // 连接

var connect = function connect() {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, {
      useUnifiedTopology: true
    }, function (err, client) {
      err ? reject(err) : resolve(client);
      console.log('ok');
    });
  });
}; // 查


var find = function find(col, query) {
  return new Promise(function _callee(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.find(query ? query : {}).toArray(function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close('查找成功');

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  });
}; // 插入


var insert = function insert(col, query) {
  return new Promise(function _callee2(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context2.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.insertMany(query, function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close('插入成功');

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
}; // 改
// query 参数1，json参数二


var updateOne = function updateOne(col, query, json) {
  return new Promise(function _callee3(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context3.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.updateOne(query, {
              $set: json
            }, function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close('更新成功');

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
}; // 删除


var remove = function remove(col, query) {
  return new Promise(function _callee4(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context4.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.remove(query, function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close('删除成功');

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
};

module.exports = {
  find: find,
  insert: insert,
  updateOne: updateOne,
  remove: remove
};