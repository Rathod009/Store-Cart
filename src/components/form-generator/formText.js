import React, {Fragment, useState, useEffect} from 'react';
import formStyle from './form-generator.style'
import Grid from '@material-ui/core/Grid';



const FormText = (props) => {

    const [data, setData] = useState(props.fieldData);
    let indx = props.indx;
    
    const changeOccur = (context) => {
        let val = context.target.value;
        data.userInput = val.toString();
        props.dataBack(data,indx);
        setData(data);
    }
    
    let readOnly = false;

    if(data.label == 'Code' && props.isUpdateCall)
        readOnly = true;        
    
        return(
               
                <Grid container justify = "center">
                    
                    {props.isUpdateCall && 
                        <Grid item xs={12} justify = 'left' style = {{marginTop : '15px', marginBottom : '-5px'}}>
                            <label>{data.label}</label>
                        </Grid>
                    }
                    {data.regex != undefined &&
                        <Grid item xs={12}>
                            <input  placeholder = {data.label} value = {data.userInput} type = {data.type} style = { formStyle.input} 
                                pattern = {data.regex} title = {data.errMsg} onChange = { (context) => {changeOccur(context)}} >
                            </input>
                        </Grid>    
                        }
                   
                    {data.regex == undefined &&
                        <Grid item xs={12}>
                            <input placeholder={data.label}  value = {data.userInput} type = {data.type} style = { formStyle.input} 
                                 title = {data.errMsg} onChange = { (context) => {changeOccur(context)}}>
                            </input>
                        </Grid>
                    }



                    {!data.valid && <div style = {formStyle.err}>*Required Field</div>}   
                </Grid>
        )
}

export default FormText;