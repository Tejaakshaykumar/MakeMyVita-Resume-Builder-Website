const User = require("../models/User");

const home =async (req,res) => {
    try {
        res.status(200).send('welcome to register page');
    }catch(error){
        console.log(error);
    }
}

const register =async (req,res) => {
    try{
        console.log(req.)
       const { username, email, password }=req.body;
       const userExist =await User.findOne({email});
       if(userExist){
        return res.status(400).json({msg:"email already exits"});
        }
        await User.create({ username, email,password});
        res.status(200).json({data});    
    }catch(error){
        res.status(500).json("internal server error")
    }
}

module.exports={home,register};