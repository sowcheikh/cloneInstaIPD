const path = require('path')
require('dotenv').config({ path:  './.env' })
const express = require("express");
const mongo = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router();
const routes = require('./routes');
const { MongoClient } = require('mongodb');

//const uri = process.env.MONGO_CONNECTION_STRING;
const uri = 'mongodb://localhost:27017/Instagram';
const mongocli = new MongoClient(uri);

// app.use(express.static("./build/"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'POST', 'GET');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-headers', 'Origin, X-Requested-with, Content-Type, Accept, referrer');
  next();
});

app.listen(process.env.SERVER_PORT, process.env.HOST, () => {
  console.log(`Server Running at http://${process.env.HOST}:${process.env.SERVER_PORT}`);
  dbConnectionTest();
  routes(app);
});

async function dbConnectionTest () {
  console.log("Database connection testing...");
  console.log('Connected successfully to server');
  const db = mongocli.db('instagram');
  const collection = db.collection('user');

  // the following code examples can be pasted here...

  return 'done.';
}

dbConnectionTest()
  .then(console.log)
  .catch(console.error)
  .finally(() => mongocli.close());
