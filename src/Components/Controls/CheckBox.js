import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import WithCommentsBlock from '../../HOC/WithCommentsBox';


import {useRecoilState, useRecoilValue} from 'recoil'
import {AnswersState} from  '../../Hooks/AnswersAtom.js'

const CheckBox = (props) => {
  const [Answers, setAnswers] = useRecoilState(AnswersState)

  const SetValue = (qId, ansId, event) => {
    debugger;
    let OtherQuestions = Answers.filter(function (a) {
      if (a.questionId !== qId) return a;
    });
    
    //Prepare AnswersObj 
    var AnswersObj = []
    let QuestionObject = [] = Answers.filter(function (a) {
      if (a.questionId === qId) return a;
    });
    if(QuestionObject !== undefined && QuestionObject.length >0 )
    {
      AnswersObj = Object.assign([], QuestionObject[0].answerValue); //I was resving error when direct assigning array  //https://stackoverflow.com/questions/52492093/typeerror-cannot-add-property-1-object-is-not-extensible-at-array-push-anon
    }
    if(event.target.checked)
    {
      AnswersObj.push(ansId);
    }else{
      AnswersObj = AnswersObj.filter(item => item !== ansId) //https://flaviocopes.com/how-to-remove-item-from-array/
    }
    
    
    setAnswers([...OtherQuestions, {mainQuestionId: props.mainQuestionId, questionId: qId,answerValue:AnswersObj, commentValue:null}]);
  
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
  
  const GetValue = (qId, AnsID) => {
    
    let result = null;
    let filtered = Answers.filter(function (a) {
      if (a.questionId === qId) return a;
    });
    
    if ((filtered || []).length > 0) {
      if (filtered[0].answerValue.includes(AnsID)) //https://attacomsian.com/blog/javascript-array-search#:~:text=IE9%20and%20up.-,includes()%20Method,as%20a%20simple%20boolean%20value.
        result =  true;
      else
        result =  false;
    } else {
      return false;
    }
    
    return result;
    
  };


  const answerElements = props.data.map((answer) =>
    <FormControlLabel key={answer.id} value={answer.id} control={
    <Checkbox  
    checked={GetValue(props.questionId, answer.id) }
    onChange={(event) => {
      SetValue(props.questionId, answer.id,event);
    }}
    value={answer.title}
    name={answer.id}
    />
  } label={answer.title} />
  );
  return (answerElements);
}
export default WithCommentsBlock(CheckBox);

