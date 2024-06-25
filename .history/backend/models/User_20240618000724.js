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
        const saltRound =await bcrypt.genSalt(10);
        const hash_password= await bcrypt.hash(user.password,saltRound);
        user.password=hash_password;
    } catch (error) {
        next(error);
    }
});

// json web token
const User=new mongoose.model('user',UserSchema);
module.exports=User;