// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);   
  console.log('Connected to MongoDB server');    
  const db = client.db(dbName);
  db.collection('Todos').find().count().then((count) => {
    console.log('Todos Count:', count);
    // console.log(JSON.stringify(docs, undefined, 2));    
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  client.close();
});