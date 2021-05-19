import React, { Fragment } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NavLink, Link } from 'react-router-dom';
import { logOut } from '../../state/actions/actions';
import "./navbar.css"


export const Navbar = () =>{

    const isLogged = useSelector(state => state.logged);
    const cartItem = useSelector(state => state.itemCart);
    const adminLogged = useSelector(state => state.adminLogged);
    const dispatch = useDispatch();
    


    return( 
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
                <NavLink exact to='/'><span className="nav-link">Home</span></NavLink>
            </li>
            {
              !adminLogged &&
              <li className="nav-item active">
                <NavLink to = '/products'><span className="nav-link">Products</span></NavLink>
              </li>
            }

            {
              adminLogged && 
              <Fragment>
              <li className="nav-item active">
                <NavLink to = '/dashboard'><span className="nav-link">Dashboard</span></NavLink>
                </li>
              <li className="nav-item active">
                <NavLink to = '/addProduct'><span className="nav-link">Add Product</span></NavLink>
              </li>
              </Fragment>

            }
            
          </ul>
        </div>
        <ul className = "navbar-nav" style = {{justifyContent : "left"}}>
           {  
              !isLogged &&
              <Fragment>
              <li className="nav-item active">
                <NavLink to = '/login'><span className="nav-link">Login</span></NavLink>
                </li>
              <li className="nav-item active">
                <NavLink to = '/signup'><span className="nav-link">Signup</span></NavLink>
              </li>
              </Fragment>
            }

           {
              isLogged &&
              <Fragment>
              <li className="nav-item">
                <Link to = '/'><span className="nav-link" onClick = {()=>dispatch(logOut())}>Logout</span></Link>
              </li>
              <li className="nav-item active">
                <NavLink to = '/cart'>
                  <span className="nav-link">
                    Cart 
                      <span className = "cartCount">{cartItem.length}</span>
                  </span>
                  </NavLink>
              </li>
              </Fragment>
            }
          </ul>
      </nav>
        
    );
}
