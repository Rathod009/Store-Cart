const adminModel = require('../model/admin.model');

exports.checkUser = (req,res) => {
    console.log(req);
    adminModel.checkUserRecord(req.params.id, req.params.pswd, (result) => {
        console.log("res",result)
        res.send(result);
    })
}

exports.addUser = (req,res)=>{
    const adminData = new adminModel(req.body);
    adminModel.addUserRecord(adminData, (result) => {
        res.send(result);
    })
}
