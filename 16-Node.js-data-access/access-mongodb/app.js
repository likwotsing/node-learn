var MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017'

const dbName = 'test'

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err)
  console.log('connected successfully to server')

  const db = client.db(dbName)

  db.collection('Persons', function(err, collection) {
    collection.insertOne({ id: 1, firtName: 'Steve', lastName: 'Jobs'})
    collection.insertOne({ id: 2, firtName: 'Bill', lastName: 'Gates'})
    collection.insertOne({ id: 3, firtName: 'James', lastName: 'Bond'})

    db.collection('Persons').countDocuments(function(err, count) {
      if (err) {
        throw err
      }
      console.log('Total Rows: ' + count);
    })
  })
  client.close()
})