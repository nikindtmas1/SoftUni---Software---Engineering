const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr, {useUnifiedTopology: true});

client.connect(function(err){
    const db = client.db('mytestdb');
    const people = db.collection('mycollection');

    // people.insertOne({"name":"Gerge"}, (err, result) => {
    //     people.find().toArray((err, data) => {
    //         console.log(data);
    // });

    // });

    people.updateOne({"_id":ObjectId("61541bac882d6c0ce7b0c79c")}, {$set:{"age": 22}})
    
});