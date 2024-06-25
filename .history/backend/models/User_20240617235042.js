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
    if(!user.isModified("password")){
        next();
    }

    try {
        const saltRound
    } catch (error) {
        next(error);
    }
});
const User=new mongoose.model('user',UserSchema);
module.exports=User;