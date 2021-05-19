
const productModel = require('../model/product.model');

exports.getProductList = (req, res) => {
    productModel.getProductListRecord((result)=>{
            res.send(result);
    })
}

exports.insertProduct = (req,res)=> {
    
    const productData = new productModel(req.body);
    console.log(">",productData)

    if(req.body.constructor == Object && Object.keys(req.body).length === 0)
    res.send(400).send({success : false, message : 'Please fill all the fields'})

    else{
        productModel.insertProductRecord(productData, (result)=>{
            res.json(result);
        })

    }

}


exports.updateProduct = (req,res)=>{
    const productData = new productModel(req.body);

    if(req.body.constructor == Object && Object.keys(req.body).length === 0)
    res.send(400).send({success : false, message : 'Please fill all the fields'})

    else{
        productModel.updateProductRecord(req.params.id,productData, (result)=>{
            res.send(result);
        })

    }

}


exports.checkoutProduct = (req,res)=>{

    console.log("Checkout",req.body.count);

        productModel.checkoutProductRecord(req.params.id,req.body.count, (result)=>{
            res.send(result);
        })

    

}

exports.deleteProduct = (req,res) => {
    productModel.deleteProductRecord(req.params.id, (result) => {
        console.log("Result", result);
        res.json(result);
    })
}


exports.selectSpecificProduct = (req,res) => {
    productModel.selectSpecificProductRecord(req.params.id, (result) => {
        res.send(result);
    })
}

exports.selectSpecificAdmin = (req,res) => {
    productModel.selectSpecificAdminRecord(req.params.adminName, (result) => {
        res.send(result);
    })
}
