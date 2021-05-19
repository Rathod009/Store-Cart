
import React, {useState} from 'react';
import FormText from './formText'
import FormTextArea from './formTextArea'
import FormDropDown from './formDropDown'
import Button from '@material-ui/core/Button';

export const FormGenerator = (props) => {

    const [data, setData] = useState(props.formData);
    

    const submitForm = (e) => {
        e.preventDefault();
        props.formValid(data);
    }

    const changeData = (val, indx)=>{
        let valTemp = [...data];
        valTemp[indx] = val;
        setData(valTemp);

    }
   
    return(
              
        <form onSubmit={(e) => submitForm(e)}>
        {
            data.map( (inp, indx) => {
                
                switch(inp.type){
                    case 'text' :
                    case 'number':
                    case 'password':
                    case 'email':
                        return(
                                <FormText isUpdateCall = {props.isUpdateCall} indx = {indx} fieldData = {inp} dataBack = {changeData.bind(this)} />
                            );
                    case 'textArea' :
                        return(
                                <FormTextArea isUpdateCall = {props.isUpdateCall} fieldData = {inp} indx = {indx} dataBack = {changeData.bind(this)}/>
                            );
                    case 'dropdown' :
                        return(
                                <FormDropDown isUpdateCall = {props.isUpdateCall} fieldData = {inp} indx = {indx} dataBack = {changeData.bind(this)}/>
                            );
                    }

                })
            }
            <br/>
            <Button variant="contained" type="submit">{props.btnSubmit}</Button>
        </form>
                    
                
        );
}

export default FormGenerator;