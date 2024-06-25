const home =async (req,res) => {
    try {
        res.status(200).send('welcome to register page');
    }catch(error){
        console.log(error);
    }
}

const register =async (req,res) => {
    try{
        console.log(res.body)
        res.status(200).send({message});
    }catch(error){
        res.status(400).send({msg:'page not found'})
    }
}

module.exports={home,register};