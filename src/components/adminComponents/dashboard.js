import axios from 'axios';
import React, { Fragment, useEffect, useState} from 'react';
import { getStorage } from '../../services';
import { ViewProduct } from '../products/ViewProductList';


export const Dashboard = () => {

    const [product, setProduct] = useState([]);
    
    useEffect(() => {
       loadList();
    },[])
    const loadList = async () => {
        await axios.get(`http://localhost:4003/api/selectAdmin/${getStorage('admin')}`)
        .then((res) => {
            setProduct(res.data);
            setProduct(product => product);
        })
        .catch((err) => console.log("ERROR IN DASHBOARD LIST :",err))
    }


    return( 
    <Fragment>
    {product.length == 0 && <p style = {{margin : "20px"}}>No Products</p>}
    {   
        product.length != 0 &&
        product.map((item) => {
            return (
            <ViewProduct item = {item}/>);
        })
        
    }
   
    </Fragment>
    );
}