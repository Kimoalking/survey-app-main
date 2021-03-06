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
        <Answer 
        hasComments={props.data.hasComments} 
        controlType={props.controlType} 
        data={props.data.answers} 
        isSurveyFormat={props.isSurveyFormat}
        mainColumnTitle={props.mainColumnTitle} 
        mainQuestionId={props.mainQuestionId} 
        questionId={props.data.id}></Answer>
      </FormControl>
    </Grid>
  );
}

