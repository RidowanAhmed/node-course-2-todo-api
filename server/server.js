const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);   
  }); 
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos,
      code: 'asdf'
    });
  }, (err) => {
    res.status(400).send(err);
  });
});

//GET /todos/123456
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Invalid ID');
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send('File not found');
    }
    res.status(200).send({todo});
  }).catch((e) => {
    res.send(400).send();
  });
});

app.listen(3000, ()=> {
  console.log('Server stated on port:', 3000);
});

module.exports = {app};



