const {mongoose} = require('./../server/DB/mongoose');
const {Todo} = require('./../server/Models/todo');

//handle object id 

const {ObjectID} = require('mongodb');


var id = '5bac305ebbd32d8f04bc5003a';

if(!ObjectID.isValid(id)){
    console.log('ID not Valid!');
}
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos: ', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('ID not Found!');
        
    }
    console.log('Todo by ID: ', todo);
}).catch((e) => {
    console.log(e);
});