
/**
 * You can use this to quickly run queries where you don't have access to
 * the mongoDB shell (e.g, at university)
 */
 const { MongoClient } = require("mongodb");
 require("dotenv").config();
 const { MONGODB_URI } = process.env;
 console.log(MONGODB_URI);
 const client = new MongoClient(MONGODB_URI);
 console.log("running");
 async function main() {
   try {
     await client.connect();
     const db = client.db("WineDB");
     const collection = db.collection("tastings");
     // type in your query down here
     const results = await collection.aggregate([
        {$group: {_id: "$regions"}},
        {$project: {name: "$_id", "_id" : 0}},
      ]).toArray();
     //output
     //const results = await collection.find({}).limit(5).toArray();
    //  console.log("here are the results");
    //  console.log(results);
    console.log(results.length);
   } catch (error) {
     console.log(error);
   }
 }

 main()