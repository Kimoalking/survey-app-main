import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import WithCommentsBlock from '../../HOC/WithCommentsBox';
import '../../Context/css/custom.css'

const RadioGroupButton =(props)=> {
  const answerElements = props.data.map((answer) =>{
    const RadioLabel = (props.isSurveyFormat===true ? "" : answer.title); //answer.title
    if(props.isSurveyFormat)
    {
      return  <td key={uuidv4()}><FormControlLabel key={answer.id} value={answer.id} control={<Radio />} label={RadioLabel} /></td>
    }else{
      return <FormControlLabel key={answer.id} value={answer.id} control={<Radio />} label={answer.title} />
    }
      
  }
    
  );
  return (
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      className='radio-buttons-tables'
      key={uuidv4()}
    >
      {answerElements}
    </RadioGroup>
  );
}
export default WithCommentsBlock(RadioGroupButton);