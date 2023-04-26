var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static("public"))

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index');
});

// about page
app.get('/item', function(req, res) {
  res.render('item');
});

app.get('/about', function(req, res){
  res.render('about')
})

app.get('/logInn', function(req, res){
  res.render('logInn')
})

app.listen(8080);
console.log('Server is listening on port 8080');


const  { MongoClient } = require('mongodb')

let admin = 0

async function main() {

   const uri= 'mongodb+srv://christianwestgaard04:Admin1@store.rrovops.mongodb.net/?retryWrites=true&w=majority';
   const client = new MongoClient(uri);

  //  logInn(client)

   try{
      // await client.connect(); 

      // createUser(client, {
      //    name: document.getElementById("suUsername"),
      //    password: document.getElementById("suPassword"),
      //    email: document.getElementById("suEmail")
      // })    
      
   } catch (e) {
      console.log(e);
   } finally {
      await client.close();
   }
}

main().catch(console.error);

async function createUser(client, newListing) {
   const result = await client.db("proveeksamen").collection("users").insertOne(newListing);

   console.log('New listing created with ID:'+ result);
}

// function logInn(client){
//   if (document.getElementById("liUsername") === client.db("proveeksamen").collection("users").findOne(document.getElementById("liUsername")) 
//     && document.getElementById("liPassword") === client.db("proveeksamen").collection("users").findOne(document.getElementById("liPassword"))){
//       admin = 1
//       console.log("admin"+admin);
//   }
// }
 

function addShoe(){
  document.getElementById()
}

async function listDatabases(client){
   const dbList = await client.db().admin().listDatabases();

   console.log('Databases');
   dbList.databases.forEach(db => {
      console.log('- ' + db.name);
   })
}

function getUser(){


  let findResult = users.find({
    username: document.getElementById("liUsername").value
  })
}

function logInn() {
  alert("CONTACT")
}

document.getElementById("liB").value.onclick = logInn()





