const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server!');

    // find one and updated
    db.collection('Todos')
        .findOneAndUpdate({
            _id: new ObjectID('5ba9d15cb6519cafbab3e1dd')
        }, {
            $set: {
                completed: false
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(result);
        });

    db.close();
});