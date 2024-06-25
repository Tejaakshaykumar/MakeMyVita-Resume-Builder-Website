const jwt = require("jsonwebtoken");

const authMiddleware= async (req,res,next) => {
    const token =req.header("Authorization")
}
module.exports=authMiddleware;