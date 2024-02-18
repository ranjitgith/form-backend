var express = require("express");
var router = express.Router();
var mongo = require("mongodb");
const objectId = mongo.ObjectId;

/* post users listing. */
router.post("/create-std", async function (req, res, next) {
  try {
    const data = req.body.data;
    const mongoClient = mongo.MongoClient;
    const server = await mongoClient.connect(
      "mongodb+srv://p:q@cluster0.i1pbx0f.mongodb.net/"
    ); // hum connect karne liye server name ka variable banie usme mongoClinet.coonect kie kie url se uske  bad await nam ka keyword use kie eki function run karne liye time le
    const db = server.db("students");
    const collection = db.collection("student");
    const result = await collection.insertOne(data);
    res.send(result);
  } catch (error) {
    res.send(error.messege);
  }
});

// Update users listing
router.put("/update-std", async function (req, res) {
  try {
    const data = req.body.data;
    const id = req.query.id; //for query params we pass id as shown localhost:2020/get/update-std?id=23456789
    const mongoClient = mongo.MongoClient;
    const server = await mongoClient.connect(
      "mongodb+srv://p:q@cluster0.i1pbx0f.mongodb.net/"
    );
    const db = server.db("students");
    const collection = db.collection("student");
    const result = await collection.updateOne(
      { _id: new objectId(id) },
      { $set: data }
    );
    res.send(result);
  } catch (err) {
    res.send(err.messege);
  }
});

// deleting users listing
router.delete("/delete-std/:id", async function (req, res) {
  try {
    const id = req.params.id; // for path params we pass id as shown --> localhost:2020/get/delete-std/23456789
    const mongoClient = mongo.MongoClient;
    const server = await mongoClient.connect(
      "mongodb+srv://p:q@cluster0.i1pbx0f.mongodb.net/"
    );
    const db = server.db("students");
    const collection = db.collection("student");
    const result = await collection.deleteOne({ _id: new objectId(id) });
    res.send(result);
  } catch (err) {
    res.send(err.messege);
  }
});

/* GET users listing. */
router.get("/get-std", async function (req, res, next) {
  try {
    const mongoClient = mongo.MongoClient;
    const server = await mongoClient.connect(
      "mongodb+srv://p:q@cluster0.i1pbx0f.mongodb.net/"
    ); // hum connect karne liye server name ka variable banie usme mongoClinet.coonect kie kie url se uske  bad await nam ka keyword use kie eki function run karne liye time le
    const db = server.db("students");
    const collection = db.collection("student");
    const result = await collection.find({}).toArray();
    res.send(result);
  } catch (error) {
    res.send(error.messege);
  }
});

module.exports = router;