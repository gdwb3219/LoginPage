const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('Hello, World! Express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<gdwb3219>:<Q8zryaIw9aGvRUjU>@cluster0.nyr9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  console.log("TESTing")
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});