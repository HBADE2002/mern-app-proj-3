// import mongoose
const mongoose = require('mongoose');


// create a schema - userSchema, this is required to create the model in MongoDB
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age : {
        type: Number,
        required: true
    },
});

// create a model - User, this is the model that will be used to interact with the MongoDB
const User = mongoose.model('User', userSchema);

// export the model
module.exports = User;