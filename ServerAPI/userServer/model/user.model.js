const dbCon = require('../db.config');

var User = function(user){
    this.email = user.id;
    this.name = user.userName;
    this.number = user.number;
    this.password = user.password;
}

User.checkUserRecord = (id, pswd, result) => {
    console.log(id,pswd)
    dbCon.query(`select * from users where email = '${id}' and password = '${pswd}'`,  (err,res)=> {
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

User.addUserRecord = (userData, result) =>{
    dbCon.query('insert into users set ?' ,userData, (res)=>{
        result(res);
    });
}

module.exports = User;