import React, { useState} from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import WithCommentsBlock from '../../HOC/WithCommentsBox';

import {useRecoilState, useRecoilValue} from 'recoil'
import {AnswersState} from  '../../Hooks/AnswersAtom.js'

//https://www.npmjs.com/package/react-date-range
//npm install react-date-range
 const  DateRangeControl =  (props) => {
  const [Answers, setAnswers] = useRecoilState(AnswersState)
  console.log('AnswersAtom ', Answers)

  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: 'selection'
  //   }
  // ]);
  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: 'selection',
  // }
  // function SetDateRange(dateRange){
  //   console.log(dateRange);
  //   setState(dateRange)
  // }

const SetValue = (value) => {
debugger;

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
  debugger;
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
          return [
              {
                startDate: new Date(),
                endDate: addDays(new Date(), 7),
                key: 'selection'
              }
            ];
        }
        
      }else{
        return [
            {
              startDate: new Date(),
              endDate: addDays(new Date(), 7),
              key: 'selection'
            }
          ];
      }
    }else{
      return [
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ];
    }
  }else{
    return [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ];
  }
}



  return (
    <DateRangePicker
    //onChange={item => SetDateRange([item.selection])}
    onChange={(event)=> {SetValue(event.selection)}}
    showSelectionPreview={true}
    moveRangeOnFirstSelection={false}
    months={2}
    ranges={GetValue()}
    // ranges={state}
    direction="horizontal"
  />
  )
}

export default WithCommentsBlock(DateRangeControl);