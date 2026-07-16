const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
// agar hoga to select ho jayga nhi to create kardega collection
const dbName = "CollegeDB";

// Use connect method to connect to the server
client.connect();
console.log("Connected successfully to MongoDB server");

const db = client.db(dbName);
const students = db.collection("students");

const findResult = students
  .find({
    name: "Dipu",
  })
  .toArray()
  .then((data) => {
    console.log("Found documents =>", data);
  })
  .catch((err) => {
    console.log(err);
  });

// const insertResult = students
//   .insertMany([{ a: 1 }, { a: 2 }, { a: 3 }])
//   .then((data) => console.log(data));
