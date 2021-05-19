import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../../state/actions/actions';


export const ProductDetails = (props) => {

    const isLogged = useSelector(state => state.logged);
    const adminLogged = useSelector(state => state.adminLogged);
    const dispatch = useDispatch();

    const [item,setItem] = useState({})
    
    
    useEffect(async () => {
       await axios.get(`http://localhost:4003/api/selectProduct/${props.match.params.id}`)
       .then((res) => setItem(res.data[0]))
       .catch((err) => console.log("IN PRODUCT DETAIL VIEW ERR",err))
    }, [])

    
    return (
        <Fragment>
        <div className = 'card' style = {{margin : '5%', padding : '10px'}}>
            <div className = 'card-body'>
                <h3 className = 'card-title'>{item.name}</h3>
                <span className = 'card-text'>Code : {item.code}</span>
                <p className = 'card-text'>{item.description}</p>
            </div>

            <ul className="list-group list-group-flush">
                <li className = 'list-group-item'> Price : {item.price}</li>
                <li className = 'list-group-item'> Category : {item.category}</li>
                <li className = 'list-group-item'> Available Quantity : {item.quantity}</li>
                <li className = 'list-group-item'> Tags : {item.tag}</li>
                <li className = 'list-group-item'> Seller ID : {item.adminName}</li>

            </ul>

           
                    
            
            {console.log("ITEM", item)}
            
        </div>
        <div className = "container customContainer">
            {
                isLogged && 
                <button onClick = {() => dispatch(addToCart(item))} className = 'btnAll' >Add to Cart</button>
            }
            {
                adminLogged &&
                <NavLink to = {{pathname : `/updateProduct/${item.id}`}} className="btnAll">Update Product</NavLink>
            }
        </div>
        </Fragment>
    )
}