import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Question from './Question';
import Answer from './Answer.js';


export default function MatrixQuestionItem(props) {
  debugger;
  if(props.isSurveyFormat)
  {
    return (
      <tr>
      <td><Question questionTitle={props.data.title}></Question></td>
      <td><Answer hasComments={props.data.hasComments} controlType={props.controlType} data={props.data.answers} isSurveyFormat={props.isSurveyFormat}></Answer></td>
      </tr>
    );
  }else{
  return (
    <tr>
    <td><Question questionTitle={props.data.title}></Question></td>
    <td><Answer hasComments={props.data.hasComments} controlType={props.controlType} data={props.data.answers}></Answer></td> 
    </tr>
  );
  }
}

