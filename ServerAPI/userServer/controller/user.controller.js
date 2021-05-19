const userModel = require('../model/user.model');

exports.checkUser = (req,res) => {
    console.log(req);
    userModel.checkUserRecord(req.params.id, req.params.pswd, (result) => {
        console.log("res",result)
        res.send(result);
    })
}

exports.addUser = (req,res)=>{
    const userData = new userModel(req.body);
    userModel.addUserRecord(userData, (result) => {
        res.send(result);
    })
}
