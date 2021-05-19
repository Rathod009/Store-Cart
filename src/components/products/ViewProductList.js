import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { addToCart } from '../../state/actions/actions';
import "./products.css"




const deleteProduct = (id, callBackFn) => {
    axios.delete(`http://localhost:4003/api/${id}`)
    .then((res) => 
        {
            alert("item Deleted");
            callBackFn();
        } 
    )
    .catch((err) => console.log("Error in item deleteion", err))
}



export const ViewProduct = (props) => {

    const isLogged = useSelector(state => state.logged);
    const adminLogged = useSelector(state => state.adminLogged);
    const dispatch = useDispatch();
    let item = props.item;

    const { addToast } = useToasts();

    const toCart = () =>{
        dispatch(addToCart(item));
        addToast('Added to Cart Successfully', {  appearance: 'success', });
    }

    
    return (
        <Fragment>
            <div className = "card customCard">
                <div className = "header">
                    <NavLink to = {{pathname : `/products/${item.id}`}}><p className = "title">{item.name}</p></NavLink>

                    {
                        isLogged && 
                        <button onClick = {() => toCart()}>Add to Cart</button>
                    }
                    {
                        adminLogged &&
                        <NavLink to = {{pathname : `/updateProduct/${item.id}`}} className="btnAll">Update Product</NavLink>
                    }
                    
                </div>

                <hr className = "divider"/>
                <Grid container className = "content">
                    <Grid item xs = {12} style = {{marginBottom:'9px'}}>
                        Description : {item.description}
                    </Grid>
                    <Grid container style = {{marginBottom:'9px'}}>
                    <Grid item xs={4}>
                        <span className = "price">Price : {item.price}</span>
                    </Grid>
                    <Grid item xs={4}>
                        Category : {item.category}
                    </Grid>
                    <Grid item xs={4}>
                        Tags : {item.tag}
                    </Grid>
                </Grid>
                
                {
                    adminLogged && 
                    <div style={{cursor : 'pointer', color : 'red'}} onClick = {() => deleteProduct(item.id, props.loadList)}>Delete Product</div>
                }
                
                </Grid>
            </div>
        </Fragment>
    )
} 