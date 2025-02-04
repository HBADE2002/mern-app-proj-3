// import the required libraries
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// import the user model
const User = require('./models/userModel');

// connect the mongoDB instance using the .connect() method
mongoose.connect(process.env.URI).
then(()=>{
    // 
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT||8000, (err)=>{
        if(err){
            console.log('Error starting server');
            console.log(err);
        }else{
            console.log('Server started at port', process.env.PORT);
        }
    });
})
.catch((error)=>{ 
    console.log('Error connecting to MongoDB');
    console.log(error);
})

app.get('/', (req, res) => {
    res.send('api running and burning...');
});
