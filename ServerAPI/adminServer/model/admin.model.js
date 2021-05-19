const dbCon = require('../db.config');

var Admin = function(admin){
    this.email = admin.id;
    this.name = admin.adminName;
    this.password = admin.password;
    this.number = admin.number;
}

Admin.checkUserRecord = (id, pswd, result) => {
    console.log(id,pswd)
    dbCon.query(`select * from admins where email = '${id}' and password = '${pswd}'`,  (err,res)=> {
    if(err)
    {
        console.log(err);
        result(err);
    }
    else{
        result(res);
    }
    })
}

Admin.addUserRecord = (adminData, result) =>{
    dbCon.query('insert into admins set ?' ,adminData, (res)=>{
        result(res);
    });
}

module.exports = Admin;