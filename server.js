const express = require('express'); //we must have express installed!
const mongoose = require('mongoose');
const charlieModel = require('./models/charlie')
const app = express();

var port = 8080; //the port we will be running our server on

//Connect to MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const charlie = require('./models/charlie');
const uri = "mongodb+srv://Charlie:qVJpXlJyOqvPlTI6@cluster0.wkjtfd8.mongodb.net/charliemovies?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
    .then((result) => app.listen(8080))
    .catch((err) => console.log(err));


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/add-charlie', (req, res) => {
    const charlie = new charlieModel ({
        movId: 'HTTYD', // Provide a value for movId
        rating: 0
    });
    
    charlie.save()
        .then((result => {
            res.send(result);
        }))
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error creating charlie');
        });
});

app.get('/all-charlies', (req,res) => {
    charlie.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/single-charlie', (req,res) => {
    charlie.findById('66184c533386d83645bacec0')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})