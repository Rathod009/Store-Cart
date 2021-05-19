import React from 'react';
import { adminOut, logIn, logOut} from '../../state/actions/actions';
import {FormGenerator} from '../form-generator/form-generator'
import {useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export const Login = (props) => {

    const dispatch = useDispatch();

    const checkFormValid = (data) => {

        let isValid = checkFn(data);
        if(isValid)
        {
            axios.get(`${props.api}/${data[0].userInput}/${data[1].userInput}`)
            .then(function(res) {
                if(res.data.length == 1)
                {  
                    dispatch(logOut());
                    dispatch(adminOut())
                    dispatch(props.dispatchFn(data[0].userInput));
                    props.props.history.push('/');
                }
                else{
                    return false;
                }
            })
            .catch(function (err) {
                console.log(err);
            })   
        }
    }

    const checkFn = (data) => {

        let temp = true;
        data.map((inp) =>{
            if(inp.userInput == ''){
                temp = false;
                inp.valid = false;        
            }
            else{
                inp.valid = true;
            }
        })
        return temp;
    }

        return (
            <div className = 'container' style = {{textAlign : 'center', width:'50%'}}>
                <h3 style = {{padiing: '20px' , marginBottom : '30px', marginTop :'30px'}}>Login</h3>
                <FormGenerator formData = {props.field} btnSubmit = "Login" formValid = {checkFormValid.bind(this)}/>
            </div>
        );

}