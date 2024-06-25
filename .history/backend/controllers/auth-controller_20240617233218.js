const User = require("../models/User");
const bcrypt= require("bcryptjs")
const home =async (req,res) => {
    try {
        res.status(200).send('welcome to register page');
    }catch(error){
        console.log(error);
    }
}

const register =async (req,res) => {
    try{
        console.log(req.body);
       const { username, email, password }=req.body;
       const userExist =await User.findOne({email});
       if(userExist){
        return res.status(400).json({msg:"email already exits"});
        }
       const userCreated = await User.create({ username, email,password});
        res.status(200).json({msg:userCreated});    
    }catch(error){
        res.status(500).json("internal server error")
    }
}

module.exports={home,register};