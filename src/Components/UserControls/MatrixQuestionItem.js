import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Question from './Question';
import Answer from './Answer.js';


export default function MatrixQuestionItem(props) {

  if(props.isSurveyFormat)
  { 
    return (
        <tr key={uuidv4()}>
          <td><Question questionTitle={props.data.title}></Question></td>
          <Answer  
          hasComments={props.data.hasComments} 
          controlType={props.controlType} 
          data={props.data.answers} 
          isSurveyFormat={props.isSurveyFormat} 
          questionId={props.data.id} 
          mainQuestionId={props.mainQuestionId}></Answer>
        </tr>
    );
  }else{
  return (
    <tr key={uuidv4()}>
      <td><Question questionTitle={props.data.title}></Question></td>
      <td><Answer hasComments={props.data.hasComments} controlType={props.controlType} data={props.data.answers} mainQuestionId={props.mainQuestionId}></Answer></td> 
    </tr>
  );
  }
}

