const home =async (req,res) => {
    try {
        res.status(200).send('welcome to register page');
    }catch(error){
        console.log(error);
    }
}

const register =async (req,res) => {
    try{
        consol
        res.status(200).send('register page using controller');
    }catch(error){
        res.status(400).send({msg:'page not found'})
    }
}

module.exports={home,register};