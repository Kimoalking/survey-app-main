import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Question from './Question';
import Answer from './Answer.js';
export default function QuestionItem(props) {
  return (
    <Grid item xs={12}>
      <FormControl>
        <Question questionTitle={props.data.title}></Question>
        <Answer hasComments={props.data.hasComments} controlType={props.controlType} data={props.data.answers}></Answer>
      </FormControl>
    </Grid>
  );
}

