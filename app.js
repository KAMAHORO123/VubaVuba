const express = require('express');
// const { connectToDb, getDb } = require('./db');
const dbConnection= require('./db');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const data_model= require('./dataSchema');

const app = express();
app.use(bodyParser.json());
app.use(cors()); 

let db;

// Connect to database
connectToDb((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    db = getDb();
});


// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    // Check if db is not initialized yet
    if (!db) {
        return res.status(500).json({
            error: 'Database not initialized'
        });
    }

    // Get form data from request body
    const { name, email, phone, message, ctype } = req.body;
const storeData=  new data_model({
    name,
    email,
    phone,
    message

})

if(!storeData) return res.status(400).send('failed to save data' )
res.send('data saved in database');


    // Insert the form data into the 'forms' collection
   
    
});



app.listen(3002, () => {
    console.log('App is listening on port 3002');
});

