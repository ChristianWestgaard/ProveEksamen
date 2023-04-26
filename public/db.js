
const { MongoClient } = require('mongodb');
// import mongoose from 'mongoose'

// let admin = 0

async function main() {

   const uri= 'mongodb+srv://christianwestgaard04:Admin1@store.rrovops.mongodb.net/?retryWrites=true&w=majority';
   const client = new MongoClient(uri);

   

   try{
      await client.connect(); 
   } catch (e) {
      console.log(e);
   } finally {
      await client.close();
   }
}

// main().catch(console.error);

// async function createUser(client, newListing) {
//    const result = await client.db("proveeksamen").collection("users").insertOne(newListing);

//    console.log('New listing created with ID:'+ result);
// }

// function logInn(client){
//   if (document.getElementById("liUsername") === client.db("proveeksamen").collection("users").findOne(document.getElementById("liUsername")) 
//     && document.getElementById("liPassword") === client.db("proveeksamen").collection("users").findOne(document.getElementById("liPassword"))){
//       admin = 1
//       console.log("admin"+admin);
//   }
// }
 

// function addShoe(){
//   document.getElementById()
// }

// async function listDatabases(client){
//    const dbList = await client.db().admin().listDatabases();

//    console.log('Databases');
//    dbList.databases.forEach(db => {
//       console.log('- ' + db.name);
//    })
// }

// function getUser(){


//   let findResult = users.find({
//     username: document.getElementById("liUsername").value
//   })
// }



// function logInn() {

//     const uri= 'mongodb+srv://christianwestgaard04:Admin1@store.rrovops.mongodb.net/?retryWrites=true&w=majority';
//     const client = new MongoClient(uri);

//     let liPassword = client.db("proveeksamen").collection("users").findOne(document.getElementById("liPassword").value)
//     let liUsername = client.db("proveeksamen").collection("users").findOne(document.getElementById("liUsername").value)

//     if (document.getElementById("liUsername").value === client.db("proveeksamen").collection("users").findOne(document.getElementById("liUsername").value) 
//         && document.getElementById("liPassword").value === client.db("proveeksamen").collection("users").findOne(document.getElementById("liPassword").value)){
//           admin = 1
//           console.log("admin"+admin);
//     }
//     alert("CONTACT")
//     console.log("- " + liUsername);
//     console.log("- " + liPassword);
// }

// function addShoe(client, newShoes) {
//    let shoeModel = document.getElementById("asMo").value
//    let shoeMaker = document.getElementById("asM").value
//    let shoecolor = document.getElementById("asF").value
   
//    client.db("proveeksamen").collection("shoes").insertOne(newShoes);
// }

// addShoe(client,{
//    shoeModel: document.getElementById("asMo").value,
//    shoeMaker: document.getElementById("asM").value,
//    shoecolor: document.getElementById("asF").value
// })

