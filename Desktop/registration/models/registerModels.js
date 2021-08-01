const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    username:

    {
        type: String,
        require:true
    },
   
    email:{
        type:String
    },
    password:
    {
        type:String,
        require:require
    }
},
{timestamps:true})

module.exports = mongoose.model( 'registration form', registerSchema);