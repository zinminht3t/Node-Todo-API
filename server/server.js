var mongoose = require('mongoose');

// using promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

// MongoDB Model
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save()
//     .then((doc) => {
//         console.log('Saved Todo', doc);
//     }, (e) => {
//         console.log('Unable to save Todo ', e);
        
//     });


var otherTodo = new Todo({
    text: 'Test Todo',
    completed: true,
    completedAt: 123
});

otherTodo.save()
    .then((doc) => {
        console.log('Saved Success', JSON.stringify(doc, undefined, 2));
    }, (e) => {
        console.log('Something Went Wrong!', e);
    })


    

// save new something



