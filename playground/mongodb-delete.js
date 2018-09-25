const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server!');

    // delete many
    // db.collection('Todos')
    // .deleteMany({text: 'Blah Blah'})
    // .then((result) => {
    //     console.log(result);
    // });


    // delete one
    // db.collection('Todos')
    //     .deleteOne({text: 'Blah'})
    //     .then((result) => {
    //         console.log(result);
    //     });


    // find one and delete
    db.collection('Todos')
    .findOneAndDelete({completed: false})
    .then((result) => {
        console.log(result);
    });




    db.close();
});