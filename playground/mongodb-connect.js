// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);


// var user = {name: 'Zin Min Htet', age: 23};

// var {name} = user;

// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server!');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Todo ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Zin Min Htet',
    //     age: 23,
    //     location: 'Singapore'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert User ', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
});