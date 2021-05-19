const dbCon = require('../db_config');

var Product = function(product) {

    this.name = product.name;
    this.code = product.code;
    this.quantity = product.quantity;
    this.price = product.price;
    this.description = product.description;
    this.tag = product.tag;
    this.category = product.category;
    this.adminName = product.adminName
    this.date = new Date();
}


Product.getProductListRecord = (result) => {
    dbCon.query('Select * from products order by date desc', (err,res)=> {
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



Product.insertProductRecord = (productData, result) => {
    console.log("Here",productData.adminName);
    dbCon.query('Insert into products set ?', productData, (res) => {
        console.log(res);
        result(res);
    })
}

Product.updateProductRecord = (productID, productData, result) => {
    dbCon.query("Update products set name = ?, code = ?,description = ?, category = ?,  tag = ?, quantity = ?, date = ?, adminName=? where id = ?" ,
         [productData.name, productData.code ,productData.description, productData.category, productData.tag, productData.quantity, productData.date,productData.adminName, productID],(res) => {
            console.log(res);
            result(res);
        })
}


Product.checkoutProductRecord = (productID, productQnty, result) => {
    dbCon.query("Update products set quantity = ? where id = ?" ,
        [productQnty, productID],(res) => {
            console.log(res);
            result(res);
        })
}

Product.deleteProductRecord = (productID, result) => {
    dbCon.query("Delete from products where id = ?", productID, (res) => {
        console.log(res);
        result(res);
    })
}



Product.selectSpecificProductRecord = (productID, result) => {
    dbCon.query("select * from products where id = ?",productID,  (err, res) => {
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

Product.selectSpecificAdminRecord = (adminName, result) => {
    dbCon.query("select * from products where adminName = ?",adminName,  (err, res) => {
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


module.exports = Product;