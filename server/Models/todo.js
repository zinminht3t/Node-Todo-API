// MongoDB Model

var mongoose = require('mongoose');

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

module.exports = {Todo};



// var otherTodo = new Todo({
//     text: '     Edit the Program     '
// });

// otherTodo.save()
//     .then((doc) => {
//         console.log('Saved Success', JSON.stringify(doc, undefined, 2));
//     }, (e) => {
//         console.log('Something Went Wrong!', e);
//     })
