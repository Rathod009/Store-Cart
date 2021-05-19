import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getStorage } from '../../services';
import FormGenerator from '../form-generator/form-generator';


export const AddProduct = (props) => {

    const [product,setProduct] = useState([
        {
            key : 'productName',
            label : 'Product Name',
            type : 'text',
            valid : true,
            required : true,
            errMsg : 'Only Alphabets Allowed',
            userInput : '',
            regex : '[a-zA-Z ]*'
        },
        
        {
            key : 'productCode',
            label : 'Code',
            type : 'text',
            valid : true,
            required : true,
            errMsg : "Fromat : ThreeAlphabets then '-' then Numbers (Ex. ABC-123)",
            userInput : '',
            regex : '[A-Za-z]{3}[-][0-9]*'
        },
        {
            key : 'productQnt',
            label : 'Quantity',
            type : 'number',
            valid : true,
            required : true,
            errMsg : "Min Val should be 1",
            userInput : '',
            regex : '([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)'
        },
        {
            key : 'productPrice',
            label : 'Price',
            type : 'number',
            valid : true,
            required : true,
            errMsg : "Min Val should be 0",
            userInput : '',
            regex : '([0-9]*[0-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)'
        },
        {
            key : 'productDesc',
            label : 'Desceription',
            type : 'textArea',
            valid : true,
            required : true,
            errMsg : "Used some wrong characters",
            userInput : '',
            regex : '[a-zA-Z0-9,*+-_#@^() !%";:><?\n]*'
        },
        {
            key : 'productTag',
            label : 'Tag',
            type : 'textArea',
            valid : true,
            required : true,
            errMsg : "Only Alphabets ALlowed & Seperate Tag using ','",
            userInput : '',
            regex : '[a-zA-Z0-9,]*'
        },
        {
            key : 'productDropDown',
            label : 'Category',
            type : 'dropdown',
            valid : true,
            required : true,
            options :['A','B','C','D'],
            errMsg : "Select Any One",
            userInput : '',
            regex : '[a-zA-Z]*'
        },    
        
    ]);    

    const[isUpdateValid, setUpdateValid] = useState(true);
    const [isUpdateCall,setUpdateCall] = useState(false);

    useEffect(() => {
        
        if(props.match.params.length != 'undefined' && props.location.pathname != '/addProduct')
        {
           
            let tempProduct = [...product];
            axios.get(`http://localhost:4003/api/selectProduct/${props.match.params.id}`)
            .then( function (res) {
                tempProduct[0].userInput = res.data[0].name;
                tempProduct[1].userInput = res.data[0].code;
                tempProduct[2].userInput = res.data[0].quantity;
                tempProduct[3].userInput = res.data[0].price;
                tempProduct[4].userInput = res.data[0].description;
                tempProduct[5].userInput = res.data[0].tag;
                tempProduct[6].userInput = res.data[0].category;
                if(getStorage('admin') !== res.data[0].adminName)
                    setUpdateValid(false);
    
                setProduct(tempProduct);
            })
            .catch(function (err) {
                console.log(err);
            })

            setUpdateCall(true);
        }
        
    }, [])


    const checkFormValid = (data) => {
        
        console.log("Check form valid", data);
        let isValid = checkFn(data);

        if(isValid){

            if(isUpdateCall){
                axios.put(`http://localhost:4003/api/${props.match.params.id}`, {
                    name: data[0].userInput,
                    code : data[1].userInput,
                    quantity : data[2].userInput, 
                    price : data[3].userInput,
                    description : data[4].userInput,
                    tag : data[5].userInput,
                    category : data[6].userInput,
                    adminName :  getStorage('admin'),  
                }).then(() => {
                    alert('Updated')
                })
            }
            else{
                axios.post('http://localhost:4003/api/insertProduct', {
                    name: data[0].userInput,
                    code : data[1].userInput,
                    quantity : data[2].userInput, 
                    price : data[3].userInput,
                    description : data[4].userInput,
                    tag : data[5].userInput,
                    category : data[6].userInput,
                    adminName :  getStorage('admin'), 
                })
                .then(() => { 
                    alert("Success")
                });
                
            }
         }

    }

    const checkFn = (data) => {
        
        let temp = true;
        
        data.map((inp) =>{
            if(inp.userInput == ''){
                temp = false;
                inp.valid = false;
                
            }
            else{
                inp.valid = true;
            }
        })
        setProduct(data);
        return temp;
    }


    return(
        <div className = "container customContainer" >
            <div className = "title">
                { !isUpdateCall && <div>Add Product</div>}
                { isUpdateCall && <div>Update Product</div>}
            </div>
            <hr/>
            {
                !isUpdateValid && <div> You dont have any right</div>
            }

            { isUpdateValid &&
            <FormGenerator formData = {product} btnSubmit = "Save"
                       formValid = {checkFormValid.bind(this)} isUpdateCall = {isUpdateCall}/>}
                            
        </div>
    )
}