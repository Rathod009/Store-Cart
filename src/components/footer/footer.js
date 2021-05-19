import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { adminOut } from '../../state/actions/actions';

export const Footer = () =>{

    const adminLogged = useSelector(state => state.adminLogged);
    const dispatch = useDispatch();

    return(
        <footer className = "card-footer footer bg-dark">
            <div>Just random licenece</div>
           { !adminLogged && <NavLink to = '/adminLogin'>Admin Login</NavLink>}
            {adminLogged && <NavLink exact to = '/' onClick = {() => dispatch(adminOut())}> Admin Logout</NavLink>}
        </footer>
    )

}