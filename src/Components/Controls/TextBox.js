import TextField from '@mui/material/TextField';

import {useRecoilState, useRecoilValue} from 'recoil'
import {AnswersState} from  '../../Hooks/AnswersAtom.js'


export default function TextBox(props){
//console.log("TextBox Props", props);
const [Answers, setAnswers] = useRecoilState(AnswersState)

console.log('AnswersAtom ', JSON.stringify(Answers))
    const SetValue = (Control) => {
  

        //alert(txtControl.target.value);
        if(props.IsHOC === true && props.mainQuestionId !== undefined && props.mainQuestionId !== "")
        {
          //https://stackoverflow.com/questions/70698302/updating-the-value-of-an-array-of-objects-stored-in-recoil-js
          let newAnswersList = [...Answers].map((item) => {
            if (item.mainQuestionId === props.mainQuestionId) 
              return { ...item, commentValue: Control.target.value };
            else 
              return item;
          });
          setAnswers(newAnswersList);
        } else if(props.questionId !== undefined && props.questionId !== ""){
          let filtered = Answers.filter(function (a) {
            if (a.questionId !== props.questionId) return a;
          });
          setAnswers([...filtered, {mainQuestionId: props.mainQuestionId, questionId: props.questionId,answerValue:[], commentValue:Control.target.value}]);
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
        if(props.IsHOC === true && props.mainQuestionId !== undefined && props.mainQuestionId !== "")
        {
          
          let newAnswersList = Answers.filter((item) => {
            if (item !== undefined && item.mainQuestionId === props.mainQuestionId) 
              return item;
          });
          if (newAnswersList.length > 0 ) {
            if (newAnswersList[0] !== undefined &&  newAnswersList[0].commentValue !== null)
            {
              return newAnswersList[0].commentValue;
            }else{
              return "";
            }
            
          }
            
          
        } else if(props.questionId !== undefined && props.questionId !== ""){
          let newAnswersList = [...Answers].filter((item) => {
            if (item !== undefined && item.questionId === props.questionId) return item ;
          });
          if (newAnswersList.length > 0 ) {
            if (newAnswersList[0] !== undefined &&  newAnswersList[0].commentValue !== null)
            {
              return newAnswersList[0].commentValue ;
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
    return(
        <TextField 
        value={GetValue() || ""} 
        onChange={(event) => { SetValue(event); }}
        ></TextField>
    );
}