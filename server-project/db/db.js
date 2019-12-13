const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Manergents';
// 连接
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) {
            err ? reject(err) : resolve(client);
            console.log('ok');
        });
    })
}
// 查
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close('查找成功');
    })
}
// 插入
const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close('插入成功');
    })
}
// 改
// query 参数1，json参数二
const updateOne = (col,query,json) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.updateOne(
                query,
             { $set:  json },
            function (err, docs) {
            err ? reject(err) : resolve(docs);
           
        })
        client.close('更新成功');
    })
}
// 删除
const remove  = (col,query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.remove(query,function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close('删除成功');
    })
}
module.exports = {
    find,
    insert,
    updateOne,
    remove 
}