import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Checkout = (props) => {
    console.log(props.location.state);

    let price = props.location.state.pay;
    let items = useSelector(state => state.itemCart);


    useEffect(() => {
       
        items.map((item) => 
        {
            let count =  item.quantity - item.count;
            
           axios.put(`http://localhost:4003/api/checkout/${item.id}`,{count})
            .then((res) => console.log("DATABASE EDITED, CHECKOUT" , res))
            .catch((err) => console.log("CHECKOUT ERR", err))
        })
    }, [])

    return (
        <div>
            <h2>Checkout Price {price}</h2>
            <hr/>
            <div>
                {
                    items.map(item => {
                        return <div>
                            <span>{item.name} {" -> "}</span> 
                            <span>Count : {item.count}</span>
                        </div>
                    })

                }
                
            </div>
        </div>
        
    )
}