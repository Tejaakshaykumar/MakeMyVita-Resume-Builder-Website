const home =async (req,res) => {
    try {
        res.status.send('welcome to register page');
    }catch(error){
        console.log(error);
    }
}

const register =async (req,res) => {
    try{
        res.status(200).send('register page using controller');
    }catch(error){
        res.status(400).send
    }
}