var mongoose = require('mongoose');

// using promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

// MongoDB Model
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var otherTodo = new Todo({
//     text: '     Edit the Program     '
// });

// otherTodo.save()
//     .then((doc) => {
//         console.log('Saved Success', JSON.stringify(doc, undefined, 2));
//     }, (e) => {
//         console.log('Something Went Wrong!', e);
//     })


var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var user = new User({
    email: 'blah@gmail.com'
});

user.save()
    .then((doc) => {
        console.log(doc);
    }, (e) => {
        console.log('Something Went Wrong!', e);
    });


    

// save new something



