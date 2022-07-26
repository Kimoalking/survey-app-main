import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TimePicker } from '@mui/lab';
import WithCommentsBlock from '../../HOC/WithCommentsBox';

import {useRecoilState, useRecoilValue} from 'recoil'
import {AnswersState} from  '../../Hooks/AnswersAtom.js'

//https://mui.com/x/react-date-pickers/time-picker/
const TimeControl = (props) => {
  //const [value, setValue] = React.useState(new Date().toLocaleString()); //null
  const [Answers, setAnswers] = useRecoilState(AnswersState)
  console.log('AnswersAtom ', Answers)

  const SetValue = (value) => {


    //alert(txtControl.target.value);
    if(props.mainQuestionId !== undefined && props.mainQuestionId !== "" && props.questionId !== undefined && props.questionId !== ""){
      let filtered = Answers.filter(function (a) {
        if (a.questionId !== props.questionId) return a;
      });
      setAnswers([...filtered, {mainQuestionId: props.mainQuestionId, questionId: props.questionId,answerValue:[value], commentValue:null}]);
    }

    //Start: remove the fist index if it is empty object
    if(Answers.length>1)
    {
      if(Answers[0].mainQuestionId === undefined || Answers[0].mainQuestionId === "")
      {
        setAnswers((Answers) => Answers.filter((_, index) => index !== 0)) //https://www.techiediaries.com/remove-element-react-18-usestate-array/
        console.log("removing first index",Answers);
      }
    }
    //End: remove the fist index if it is empty object

};

const GetValue = () =>{
  //https://stackoverflow.com/questions/71460873/how-do-i-select-and-update-an-object-from-a-larger-group-of-objects-in-recoil
  
  if (Answers.length > 0) 
  {
    if(props.questionId !== undefined && props.questionId !== ""){
      let newAnswersList = [...Answers].filter((item) => {
        if (item !== undefined && item.questionId === props.questionId) return item ;
      });
      if (newAnswersList.length > 0 ) {
        if (newAnswersList[0] !== undefined &&  newAnswersList[0].answerValue !== null)
        {
          return newAnswersList[0].answerValue ;
        }else{
          return "";
        }
        
      }
    }else{
      return "";
    }
  }else{
    return "";
  }
}


  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <TimePicker
        label="Choose a Time"
        value={GetValue() } 
        onChange={(value) => {
          SetValue(value);
        }}
        renderInput={(params) => <TextField {...params} />}
    />
    </LocalizationProvider>
  );
}
export default WithCommentsBlock(TimeControl);