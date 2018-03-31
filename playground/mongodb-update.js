const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);   
  console.log('Connected to MongoDB server');    
  const db = client.db(dbName);
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5abf9ce1714f7c259c39ae86')
  // }, {
  //   $set: {
  //     completed: true,
  //     text: 'Walk through the park'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);    
  // });  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5abe74ce610ae62d08914207')
  }, {
    $set: {
      name: 'Ibrahim Chowdhury',
    }, 
      $inc: {
        age: 1
      }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  client.close();
});