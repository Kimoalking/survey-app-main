import React from 'react';
import Radio from '@mui/material/Radio';
import WithCommentsBlock from '../../HOC/WithCommentsBox';
import '../../Context/css/custom.css'

import {useRecoilState, useRecoilValue} from 'recoil'
import {AnswersState} from  '../../States/AnswersAtom.js'
//https://www.section.io/engineering-education/react-recoil-state-management/
let ControlProps = null
const RadioButton =(props)=> {
  //console.log("Radio Props", props);
  ControlProps = props;
const answerElements = [];
const [Answers, setAnswers] = useRecoilState(AnswersState)
//console.log("UpdateAnswer",Answers);

const SetValue = (qId, ansId) => {
  let filtered = Answers.filter(function (a) {
    if (a.questionId !== qId) return a;
  });
  
  
  setAnswers([...filtered, {mainQuestionId: props.mainQuestionId, questionId: qId,answerIds:[ansId],answerValues:null, commentValue:null}]);

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
    return filtered[0].answerIds[0];
  } else {
    return null;
  }
};

//<input name={props.questionId} type="radio" value={answer.id}/>
//https://mui.com/material-ui/react-radio-button/
if(props.isSurveyFormat === true && props.data.length > 1)
{
  const radios = props.data.map((answer, index) =>
  
      <td key={index}>
        <Radio
        checked={GetValue(props.questionId) == answer.id}
        onChange={() => {
          SetValue(props.questionId, answer.id);
        }}
        value={answer.id}
        name={props.questionId}
      />
        <label htmlFor={props.questionId}>{(props.isSurveyFormat===true ? "" : answer.title)}</label>
      </td>
   
);
answerElements.push(radios);

}else{
  const radios = props.data.map((answer, index) =>
  
      <span key={index}>
        <Radio
        checked={GetValue(props.questionId) === answer.id}
        onChange={() => {
          SetValue(props.questionId, answer.id);
        }}
        value={answer.id}
        name={props.questionId}
        />
        <label htmlFor={props.questionId}>{(props.isSurveyFormat===true ? "" : answer.title)}</label>
      </span>
   
);
answerElements.push(radios);
}
  
return (answerElements);
}
export default WithCommentsBlock(RadioButton);