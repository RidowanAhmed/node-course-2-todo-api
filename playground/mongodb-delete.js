const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log('Connected to MongoDB server');
  const db = client.db(dbName);
  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);    
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat Launch' }).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
    console.log(JSON.stringify(result.value, undefined, 2));
  });
  client.close();
});