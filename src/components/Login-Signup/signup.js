import React from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import FormGenerator from '../form-generator/form-generator';


export const Signup = () => {

    const signup = [
        {
            key : 'userID',
            label : 'Email ID',
            type : 'email',
            valid : true,
            required : true,
            errMsg : 'alphabets @ and digits allowed',
            userInput : '',
        },        
        {
            key : 'userName',
            label : 'Name',
            type : 'text',
            valid : true,
            required : true,
            errMsg : 'Only Alphabets',
            userInput : '',
            regex : '[A-Za-z]*'
        },
        {
            key : 'userNumber',
            label : 'Contact Number',
            type : 'number',
            valid : true,
            required : true,
            errMsg : 'only digits allowed',
            userInput : '',
    
        },
        {
            key : 'pswd',
            label : 'Password',
            type : 'password',
            valid : true,
            required : true,
            errMsg : '',
            userInput : '',
        }
    ];


    const checkFormValid = (data) => {
        let isValid = checkFn(data);

        if(isValid)
        {
            axios.post('http://localhost:4001/api/user/addUser',{
                id : data[0].userInput,
                userName : data[1].userInput,
                number : data[2].userInput,
                password : data[3].userInput
            })
            .then(function(res) {
                console.log(res.data)
                if(res.data === "")
                    alert(`User Added`);
                else if(res.data.errno === 1062)
                    alert('This mail id is already registered')
                return <Redirect to = '/'/>
            })
            .catch(function (err) {
                alert(`${err}`)
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

    return(
        <div className = 'container' style = {{textAlign : 'center', width:'70%'}}>
                <h3 style = {{padiing: '20px' , marginBottom : '30px', marginTop :'30px'}}>Signup</h3>
                <FormGenerator formData = {signup} btnSubmit = "Signup" formValid = {checkFormValid.bind(this)}/>
        </div>
    )

}