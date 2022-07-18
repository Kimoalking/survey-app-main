import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import WithCommentsBlock from '../../HOC/WithCommentsBox';

const CheckBox = (props) => {
  const answerElements = props.data.map((answer) =>
    <FormControlLabel key={answer.id} value={answer.id} control={<Checkbox />} label={answer.title} />
  );
  return (answerElements);
}
export default WithCommentsBlock(CheckBox);

