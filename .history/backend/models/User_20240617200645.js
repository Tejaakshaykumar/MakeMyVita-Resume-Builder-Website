const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        required:true,
    },
    password
})