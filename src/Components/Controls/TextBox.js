import TextField from '@mui/material/TextField';

import {useRecoilState, useRecoilValue} from 'recoil'
import {AnswersState} from  '../../Hooks/AnswersAtom.js'


export default function TextBox(props){
//console.log("TextBox Props", props);
const [Answers, setAnswers] = useRecoilState(AnswersState)

console.log('AnswersAtom ', Answers)
    const UpdateComments = (qId, txtControl) => {
        debugger;

        //alert(txtControl.target.value);
        //https://stackoverflow.com/questions/70698302/updating-the-value-of-an-array-of-objects-stored-in-recoil-js
        let newAnswersList = [...Answers].map((item) => {
          if (item.mainQuestionId === props.mainQuestionId) 
            return { ...item, commentValue: txtControl.target.value };
          else 
            return item;
        });
        
        setAnswers(newAnswersList);

        //Start: remove the fist index if it is empty object
        if(Answers[0].questionId === undefined || Answers[0].questionId === "")
        {
          debugger;
          setAnswers((Answers) => Answers.filter((_, index) => index !== 0))
          console.log("removing first index",Answers);
        }
        //End: remove the fist index if it is empty object

      };

    const GetComment = (qId) =>{
      debugger;
      //https://stackoverflow.com/questions/71460873/how-do-i-select-and-update-an-object-from-a-larger-group-of-objects-in-recoil
      
      if (Answers.length > 0) 
      {
        let newAnswersList = [...Answers].map((item) => {
          if (item !== undefined && item.mainQuestionId === qId) return item ;
        });
        if (newAnswersList.length > 0 ) {
          if (newAnswersList[0] !== undefined &&  newAnswersList[0].commentValue !== null)
          {
            return newAnswersList[0].commentValue;
          }else{
            return "";
          }
          
        }
        
      }
        
    }
    return(
        <TextField value={GetComment(props.mainQuestionId)} onChange={(event) => {
            UpdateComments(props.name, event);
          }}
        ></TextField>
    );
}