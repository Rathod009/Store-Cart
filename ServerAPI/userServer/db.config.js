const mysql = require('mysql');

const dbCon = mysql.createConnection({
    host:'localhost',
    user:'root',
    password : 'password',
    database : 'cart_db'
})


dbCon.connect(
    function(error){
        if(error)
            console.log("Error in Database Connection :", error);
        else
            console.log("Database Connected Succesfully");
    } 
)

module.exports = dbCon;