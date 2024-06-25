const mongoose=require('mongoose');
const bcrypt= require("bcryptjs");

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

UserSchema.pre('save',async function(next){
    const user=this;
    if
})
const User=new mongoose.model('user',UserSchema);
module.exports=User;