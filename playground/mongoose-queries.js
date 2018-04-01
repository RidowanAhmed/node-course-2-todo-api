const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5abfa84b24f83e34141e3578';

if (!ObjectID.isValid(id)) {
  console.log('Invalid ID');  
  return;
}

/*Todo.find({
  _id: id
}).then((todos) => {
  if (todos.length === 0) {
    return console.log('Todos not found');
  }
  console.log('Todos', todos);  
});

Todo.findOne({
  _id: id
}).then((todo) => {
  if (!todo) {
    return console.log('Todo not found');
  }
  console.log('Todo', todo);  
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');    
  }
  console.log('Todo By Id', todo);  
}).catch((err) => {
  console.log(err);
  
});*/

User.find({
  name: "Ridowan Ahmed",
  age: 25
}).then((users) => {
  if (users.length === 0) {
    return console.log('Todos not found');
  }
  console.log(JSON.stringify(users, undefined, 2));
  }).catch((err) => {
    console.log(err);

  });
