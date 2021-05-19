import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./cart.css"
import { CartProductView } from './cartProductView';

export const Cart = (props)=>{

    const [pay,setPay] = useState(0);
    const cartItem = useSelector(state => state.itemCart);

    useEffect(() => {
        // cartItem = useSelector(state => state.itemCart);
    }, [pay])
    
    const paymentCount = (val , flag) => 
        {
            flag ? setPay(prev => prev + val) : setPay(prev => prev - val); 
            // cartItem = useSelector(state => state.itemCart);
        }

    const checkOut = () =>{
      props.history.push("/checkout", {pay})
    }

    return(
        <Fragment>
            {
                cartItem.length === 0 ? 
                <div className = "headerCart">Cart is Empty</div> :
                <Fragment>    
                    <div className="headerCart">
                        Your cart contains {cartItem.length} item
                    </div>
                    {
                        cartItem.map( (item,indx) => {
                            return (
                                <CartProductView item ={item} indx = {indx} value = {paymentCount.bind(this)}/>
                            )
                        })
                    }
                    <hr/>
                    
                    <div style = {{textAlign:'center'}}>
                        <div className = "itemTitle"> Total Amount : {pay}</div>
                        <br/>
                        <button className = "btnAll" onClick = {checkOut}>Checkout</button>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}