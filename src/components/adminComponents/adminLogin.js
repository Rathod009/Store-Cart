import React from 'react';
import { adminIn } from '../../state/actions/actions';
import { Login } from '../Login-Signup/Login';



export const AdminLogin = (props) => {

let api = 'http://localhost:4002/api/admin/checkUser';
const login = [
    {
        key : 'adminID',
        label : 'Admin ID',
        type : 'email',
        valid : true,
        required : true,
        errMsg : 'Enter Valid Admin Id',
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
    <Login field = {login} dispatchFn = {adminIn} api = {api} props = {props}/>
)

}