const { MongoClient } = require("mongodb");
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");

/**
 * notice above we are using dotenv. We can now pull the values from our environment
 */

 const { WEB_PORT, MONGODB_URI } = process.env;
 const client = new MongoClient(MONGODB_URI);

 async function main() {
   try {
     await client.connect();
     const db = client.db("WineDB");
     const tastings_count = await db.collection("tastings").find({}).count();
     const italy_80_count = await db.collection("tastings").find({price: {$gt:80}, country: "Italy"}).count();
     const italy_array = await db.collection("tastings").find({price: {$gt:80}, country: "Italy"}).sort({price:-1}).limit(5).toArray();
     console.log("Total records in Tastings collection: " + tastings_count);
     console.log("Total wines tasted from Italy valued higher than 80: " + italy_80_count);
     console.log(italy_array)
     
    } catch (e) {
      console.log(`error here ${e}`)
    } 
  }

  main();