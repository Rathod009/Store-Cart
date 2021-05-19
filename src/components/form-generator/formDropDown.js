import React, {Component, useState} from 'react';
import formStyle from './form-generator.style'
import Grid from '@material-ui/core/Grid';

const FormDropDown = (props) => {
    

    const [data, setData] = useState(props.fieldData);

    const changeOccur = (context) => {
        let val = context.target.value;
        let indx = props.indx;
        data.userInput = ''+val;
        props.dataBack(data, indx); 
        setData(data);
            
    };

        return(
            <Grid style = {formStyle.container} container justify = 'center'>
                <Grid item xs={6} style = {{textAlign :'right',  width : '40%', textAlign : 'right', float:'right'}}>
                        <label style = {formStyle.label}>{data.label}</label>
                </Grid>

                <Grid item xs={6} style = {{textAlign :'left'}}>
                    <select value = {data.userInput} style = {formStyle.input} onChange = {(context)=>{changeOccur(context)}}>
                        <option value = ''>Select</option>
                        {   
                            data.options.map((inp) =>{
                                return (
                                    <option value ={inp}>{inp}</option>
                                )
                            })
                        }
                    </select>
                    {!data.valid && <div style = {formStyle.err}>{data.errMsg}</div>}   
                </Grid>
                 
            </Grid>
     
        )
}

export default FormDropDown;