const jwt = require("jsonwebtoken");

const authMiddleware= async (req,res,next) => {
    const token =req.header("Authorization");
    if(!token){
        return res.status(401).json({message:"Unauthorized HTTP,token not provided"});
    }

    const jwtToken = token.replace("Bearer","").trim();
    console.log("token from auth middleware",jwtToken);
    try {
        const isVerified=jwt.verify(jwtToken,process.env.JWT_KEY);
        console.log(isVerified);
        next();
    } catch (error) {
        return res.status(401).json({})
    }
};

module.exports=authMiddleware;