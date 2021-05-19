import {useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { AddProduct } from './components/adminComponents/addProduct';
import { AdminLogin } from './components/adminComponents/adminLogin';
import { AdminSignup } from './components/adminComponents/adminSignup';
import { Dashboard } from './components/adminComponents/dashboard';
import { UpdateProduct } from './components/adminComponents/updateProduct';
import { Cart } from './components/cartItems/cart';
import { Checkout } from './components/cartItems/checkout';
import { Footer } from './components/footer/footer';
import { Home } from './components/Home/Home';
import { Signup } from './components/Login-Signup/signup';
import {Navbar} from './components/navbar/navbar';
import { ProductDetails } from './components/products/productDetails';
import { ProductList } from './components/products/ProductList';
import { UserLogin } from './components/userLogin-Sigmup/userLogin';






function App() {
  
  const adminLogged = useSelector(state => state.adminLogged);
  const isLogged = useSelector(state => state.logged);

  return (
      <Router>
          <Navbar/>
          <Switch>
            <Route exact path ='/' component = {Home}/>
            <Route path = "/login" component = {UserLogin}/>
            <Route path="/signup" component = {Signup}/>
            <Route exact path="/products" component = {!adminLogged ? ProductList : UserLogin}/>
            <Route exact path="/products/:id" component = {!adminLogged ? ProductDetails : UserLogin}/>
            <Route path="/cart" component = {isLogged ? Cart : UserLogin}/>
            <Route path="/adminLogin" component = {AdminLogin}/>
            <Route path="/dashboard" component = {adminLogged? Dashboard :AdminLogin}/>
            <Route path="/addProduct" component = {adminLogged? AddProduct :AdminLogin}/>
            <Route path="/checkout" component = {isLogged? Checkout : UserLogin}/>
            <Route path="/updateProduct/:id" component = {adminLogged? AddProduct :AdminLogin}/>
          </Switch>
          <Footer/>
      </Router>

  );
}

export default App;
