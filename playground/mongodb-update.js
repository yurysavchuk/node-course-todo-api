// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a241020fb94b207c426fb81')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: true
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a2400571bd9f5327835f97c')
    }, {
        $set: {
            name: 'Yury Sauchuk'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: true
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});