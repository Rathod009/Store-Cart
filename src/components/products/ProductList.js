import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { ViewProduct } from './ViewProductList';

export const ProductList = (props) => {

    const [product, setProduct] = useState([]);
    
    useEffect(() => {
       loadList();
    },[product])

    useEffect(() => {
        loadList();
     },[])


    const loadList = async () => {
        await axios.get('http://localhost:4003/api/getProductList')
        .then((res) => setProduct(res.data))
        .catch((err) => console.log("ERROR IN PORODUCT LIST :",err))
    }

    return( 
    <Fragment>
    {product.length == 0 && <p style = {{margin : "20px"}}>No Products</p>}
    {   
        product.length != 0 &&
        product.map((item) => {
            return (
            <ViewProduct key={item.code} item = {item} loadList = {loadList}/>);
        })
        
    }
    </Fragment>
    );
}