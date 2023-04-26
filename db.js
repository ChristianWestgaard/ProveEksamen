const  { MongoClient } = require('mongodb')

async function main() {
   const uri= 'mongodb+srv://christianwestgaard04:Admin1@store.rrovops.mongodb.net/?retryWrites=true&w=majority';

   const client = new MongoClient(uri);

   try{
      await client.connect(); 

      createListing(client, {
         name: "Geir",
         
      })

   } catch (e) {
      console.log(e);
   } finally {
      await client.close();
   }
}

main().catch(console.error);

async function createUser(client, newListing) {
   const result = await client.db("proveeksamen").collection("users").insertOne(newListing);

   console.log('New listing created with ID:'+result);
}

async function listDatabases(client){
   const dbList = await client.db().admin().listDatabases();

   console.log('Databases');
   dbList.databases.forEach(db => {
      console.log('- ' + db.name);
   })
}

