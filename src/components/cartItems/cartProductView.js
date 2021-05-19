import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemCount, removeItem, removeItemCount } from '../../state/actions/actions';



const callBack = (fn, price, op) => {
    fn(price, op);
}

export const CartProductView = (props) => {

    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.itemCart);
    
    const getPrice = () =>{
        let temp = item.price * item.count;
        return temp;
    }

    let item = props.item;
    let price = getPrice(); 

    useEffect(() => {
       props.value(price, true);
       console.log("useEffect", item)
    }, [])

    const removeIt = () => {
        dispatch(removeItem(item));
        callBack(props.value, price, false);
    }

    const addItem = () => {
        dispatch(addItemCount(props.indx));
        callBack(props.value, item.price, true)
    }

    const subItem = () => {
        dispatch(removeItemCount(item,props.indx))
        callBack(props.value, item.price, false)
    }

    return (
    <div className = "card customCardItem">
        <div className="itemTitle">{item.name}</div>
        <div className= "itemPrice"> 
            <span>
                <button className = "btnAll" onClick = {()=> addItem()} >+</button>
                    {cartItem[props.indx].count}
                <button className = "btnAll" onClick = {()=> subItem()}>-</button>
            </span> * {item.price} $ = {price} $</div>
   
        <button id= "remove" className = "btnAll" onClick = {removeIt}>Remove Item</button>
    </div>
    )
}