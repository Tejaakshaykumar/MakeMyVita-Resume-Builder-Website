const jwt = require("jsonwebtoken");

const authMiddleware= async (req,res,next) => {
    const token =req.header("Authorization");
    if(!token){
        return res.status()
    }
}
module.exports=authMiddleware;