const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    }
});
const User=new mongoose.model('user',UserSchema);
module.exp