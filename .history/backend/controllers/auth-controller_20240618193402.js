const User = require("../models/User");
const bcrypt= require("bcryptjs");

const home =async (req,res) => {
    try {
        res.status(200).send('welcome to register page');
    }catch(error){
        console.log(error);
    }
}

//register login
const register =async (req,res) => {
    try{

        console.log(req.body);
       const { username, email, password }=req.body;
       const userExist =await User.findOne({email});
       
       if(userExist){
        return res.status(400).json({msg:"email already exits"});
        }

        // const saltRound=10;
        // const hash_password =await bcrypt.hash(password,saltRound);
        // const userCreated = await User.create({ username, email,password:hash_password});
    const userCreated = await User.create({ username, email,password});
    
    res.status(200).json({
        msg:userCreated,
        token:await userCreated.generateToken(),
        userId:userCreated._id.toString(),
    });    
    }catch(error){
        res.status(500).json("internal server error")
    }
}

//login logic
const login =async (req,res) => {
    try{

       const { email, password }=req.body;
       const userExist =await User.findOne({email});
       console.log(userExist);
       if(!userExist){
        return res.status(400).json({msg:"Invalid Credentials"});
        }

        const user = await bcrypt.compare(password,userExist.password);
    if(user){
        res.status(200).json({
            msg:'login successful',
            token:await userExist.generateToken(),
            userId:userExist._id.toString(),
        }); 
    }else {
        res.status(401).json({message:"Invalid Email or Password"})
    }   
    }catch(error){
        res.status(500).json("internal server error")
    }
}

//user logic
const user =async (req,res) => {
    try {
      const userData =req.user;
      console.log(userData)  
    } catch (error) {
        console.log('error from the user route ${error}');
    }
}

module.exports={home,register ,login};