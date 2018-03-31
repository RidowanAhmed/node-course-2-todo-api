// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert'); 

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);   
  console.log('Connected to MongoDB server');    
  const db = client.db(dbName);
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) return console.log('Unable to insert todo', err);
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // const collection = db.collection('Users');
  // collection.insertOne({
  //   name: 'Ridowan Ahmed',
  //   age: 25,
  //   Location: 'Ka-24/3, Aziz Road, Badda, Dhaka-1229'
  // }, (err, result) => {
  //   if (err) return console.log('Unable to insert todo', err);
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });
  client.close();
});