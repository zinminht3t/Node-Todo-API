var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./DB/mongoose');
var {Todo} = require('./Models/todo');
var {ObjectID} = require('mongodb');

var app = express();

// env or local
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save()
        .then((doc) => { 
            res.send(doc); }, (e) => { res.status(400).send(e);
    });
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/{id}
app.get('/todos/:id', (req, res) => {
    // res.send(req.params);
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(400).send("ID is not valid!");
    }

    Todo.findById(id).then((todo) => {
        if(!todo){
          res.status(404).send("ID not found!");
        }
        res.send({todo});
    }).catch((e) => res.status(400).send());


});

app.delete('/todos/:id', (req, res) => {

    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(400).send("ID is not valid!");
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
          res.status(404).send("ID not found!");
        }
        res.send({todo});
    });
});


app.get('/todos');

app.listen(port, () => {
    console.log(`Started on Port ${port}`);
});

module.exports = {app};