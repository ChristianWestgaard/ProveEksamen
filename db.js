const  { MongoClient } = require('mongodb')

let admin = 0

async function main() {
   const uri= 'mongodb+srv://christianwestgaard04:Admin1@store.rrovops.mongodb.net/?retryWrites=true&w=majority';
   
   function logInn(client){
         if (document.getElementById("liUsername") === client.db("proveeksamen").collection("users").findOne(document.getElementById("liUsername")) 
            && document.getElementById("liPassword") === client.db("proveeksamen").collection("users").findOne(document.getElementById("liPassword"))){
               admin = 1
               console.log("admin"+admin);
         }
   }
   const client = new MongoClient(uri);

   try{
      await client.connect(); 

      // await createUser(client, {
      //    name: "Geir",
      //    email: "geir@test.no"
      // })
      
   

   } catch (e) {
      console.log(e);
   } finally {
      await client.close();
   }
}




main().catch(console.error);

// async function createUser(client, newListing) {
//    const result = await client.db("proveeksamen").collection("users").insertOne(newListing);

//    console.log('New listing created with ID:'+ result);
// }

async function listDatabases(client){
   const dbList = await client.db().admin().listDatabases();

   console.log('Databases');
   dbList.databases.forEach(db => {
      console.log('- ' + db.name);
   })
}

