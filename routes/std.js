var express = require('express');
var router = express.Router();
var mongo = require('mongodb')

/* GET users listing. */
router.get('/get-std', async function(req, res, next) {
    try{
        const mongoClient=mongo.MongoClient
        const server=await mongoClient.connect("mongodb+srv://p:q@cluster0.i1pbx0f.mongodb.net/") // hum connect karne liye server name ka variable banie usme mongoClinet.coonect kie kie url se uske  bad await nam ka keyword use kie eki function run karne liye time le 
        const db=server.db('students')
        const collection=db.collection('student') 
        const result=await collection.find({}).toArray()
        res.send(result)}
        catch(error){
            res.send(error.messege)
        }
});

/* post users listing. */
router.post('/create-std', async function(req, res, next) {
   try{ const data=req.body.data
    const mongoClient=mongo.MongoClient
    const server=await mongoClient.connect("mongodb+srv://p:q@cluster0.i1pbx0f.mongodb.net/") // hum connect karne liye server name ka variable banie usme mongoClinet.coonect kie kie url se uske  bad await nam ka keyword use kie eki function run karne liye time le 
    const db=server.db('students')
    const collection=db.collection('student') 
    const result=await collection.insertOne(data)
    res.send(result)}
    catch(error){
        res.send(error.messege)
    }
  });

module.exports = router;