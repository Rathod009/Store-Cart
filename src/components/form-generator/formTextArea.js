import React, {useState} from 'react';
import formStyle from './form-generator.style'
import Grid from '@material-ui/core/Grid';


const FormTextArea = (props) => {

    const [data, setData] = useState(props.fieldData);

    const changeOccur = (context) => {
        let val = context.target.value;
        let indx = props.indx;
        data.userInput = val.toString();
        props.dataBack(data,indx);
        setData(data);
    }


        return(
            <Grid style = {formStyle.container} container justify = "center">
                    {props.isUpdateCall && 
                        <Grid item xs={12} justify = 'left' style = {{marginTop : '15px', marginBottom : '-5px'}}>
                            <label>{data.label}</label>
                        </Grid>
                    }
                    <Grid item xs={12}>
                        <textarea placeholder={data.label} value = { data.userInput} style = { formStyle.input} title = {data.errMsg} pattern = {data.regex} onChange = {(context)=>{changeOccur(context)}}/>
                    </Grid>
                    {!data.valid && <div style = {formStyle.err}>*Required Field</div>}                    
            </Grid>
     
        )
    
}
export default FormTextArea;