import React, { Fragment } from 'react';
import { logIn } from '../../state/actions/actions';
import { Login } from '../Login-Signup/Login';


export const UserLogin = (props) => {

console.log("USER LOGIN", props)

let api = 'http://localhost:4001/api/user/checkUser';
const login = [
    {
        key : 'userID',
        label : 'User ID',
        type : 'email',
        valid : true,
        required : true,
        errMsg : 'Enter Valid User Id',
        userInput :'',
    },

    {
        key : 'pswd',
        label : 'Password',
        type : 'password',
        valid : true,
        required : true,
        errMsg : 'Invalid Pswd',
        userInput :'',
    }
];

return(
    
    <Login field = {login} dispatchFn = {logIn} api = {api} props = {props}/>
   
)

}