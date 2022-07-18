import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import WithCommentsBlock from '../../HOC/WithCommentsBox';

const RadioButton =(props)=> {
  const answerElements = props.data.map((answer) =>
    <FormControlLabel key={answer.id} value={answer.id} control={<Radio />} label={answer.title} />
  );
  return (
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      {answerElements}
    </RadioGroup>
  );
}
export default WithCommentsBlock(RadioButton);