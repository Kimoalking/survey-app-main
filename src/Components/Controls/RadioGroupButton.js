import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import WithCommentsBlock from '../../HOC/WithCommentsBox';
import '../../Context/css/custom.css'

import {useRecoilState, useRecoilValue} from 'recoil'
import {AnswersState} from  '../../Hooks/AnswersAtom.js'

const RadioGroupButton =(props)=> {
  const [Answers, setAnswers] = useRecoilState(AnswersState)

  const SetValue = (qId, ansId) => {
    let filtered = Answers.filter(function (a) {
      if (a.questionId !== qId) return a;
    });
    
    
    setAnswers([...filtered, {mainQuestionId: props.mainQuestionId, questionId: qId,answerValue:[ansId], commentValue:null}]);
  
    //Start: remove the fist index if it is empty object
    if(Answers.length>1)
    {
      if(Answers[0].questionId === undefined || Answers[0].questionId === "")
      {
        setAnswers((Answers) => Answers.filter((_, index) => index !== 0))//https://www.techiediaries.com/remove-element-react-18-usestate-array/
        console.log("removing first index",Answers);
      }
    }
    //End: remove the fist index if it is empty object
  };
  
  const GetValue = (qId) => {
    let filtered = Answers.filter(function (a) {
      if (a.questionId === qId) return a;
    });
    if ((filtered || []).length > 0) {
      return filtered[0].answerValue[0];
    } else {
      return null;
    }
  };






  const answerElements = props.data.map((answer) =>{
  
    const RadioLabel = (props.isSurveyFormat===true ? "" : answer.title); //answer.title
    if(props.isSurveyFormat)
    {
      return  <td key={uuidv4()}><FormControlLabel key={answer.id} value={answer.id} control={
      <Radio 
      checked={GetValue(props.questionId) == answer.title}
        onChange={() => {
          SetValue(props.questionId, answer.title);
        }}
        value={answer.title}
        name={props.questionId}
      />
    } label={RadioLabel} /></td>
    }else{
      return <FormControlLabel key={answer.id} value={answer.id} control={
      <Radio 
      checked={GetValue(props.questionId) == answer.title}
        onChange={() => {
          SetValue(props.questionId, answer.title);
        }}
        value={answer.title}
        name={props.questionId}
      />
    } label={answer.title} />
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