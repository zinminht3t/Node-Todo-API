const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server!');

    // db
    // .collection('Todos')
    // .find(
    //     {
    //         _id: new ObjectID('5ba9ce41ad9d4307b849dd77')
    //     }
    // )
    // .toArray()
    // .then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
        
    // });

    db
    .collection('Todos')
    .find()
    .count()
    .then((count) => {
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.close();
});