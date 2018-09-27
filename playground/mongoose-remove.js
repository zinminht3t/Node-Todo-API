const {mongoose} = require('./../server/DB/mongoose');
const {Todo} = require('./../server/Models/todo');

//handle object id 

const {ObjectID} = require('mongodb');

// Todo.remove({})


// Todo.remove().then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findByIdAndRemove('5bac4234105e48d86d15a7b2').then((todo) => {
    console.log(todo);
});