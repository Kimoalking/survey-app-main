import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import WithCommentsBlock from '../../HOC/WithCommentsBox';


import {useRecoilState, useRecoilValue} from 'recoil'
import {AnswersState} from  '../../Hooks/AnswersAtom.js'

const CheckBox = (props) => {
  const [Answers, setAnswers] = useRecoilState(AnswersState)

  const SetValue = (qId, ansId) => {
  debugger;
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
      return filtered[0].answerValue;
    } else {
      return null;
    }
  };


  const answerElements = props.data.map((answer) =>
    <FormControlLabel key={answer.id} value={answer.id} control={
    <Checkbox  
    checked={GetValue(props.questionId) === answer.title}
    onChange={() => {
      SetValue(props.questionId, answer.id);
    }}
    value={answer.title}
    name={answer.id}
    />
  } label={answer.title} />
  );
  return (answerElements);
}
export default WithCommentsBlock(CheckBox);

