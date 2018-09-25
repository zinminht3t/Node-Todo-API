var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./DB/mongoose');
var {Todo} = require('./Models/todo');
var {User} = require('./Models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save()
        .then((doc) => { 
            res.send(doc); }, (e) => { res.status(400).send(e);
    })

})

app.get('/todos')

app.listen(3000, () => {
    console.log('Started on Port 3000');
})