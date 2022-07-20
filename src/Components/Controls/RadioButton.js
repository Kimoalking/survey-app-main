import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import WithCommentsBlock from '../../HOC/WithCommentsBox';
import '../../Context/css/custom.css'

const RadioButton =(props)=> {
  debugger;
const [selectedValue, setSelectedValue] = useState("a");
const answerElements = [];
const handleChange =(event) =>{



  setSelectedValue(event.target.value);
  console.log("QuestionId=" + event.target.name);//QuestionId
  console.log("Radio ID=" + event.target.value); //Radio ID
  console.log("IsChecked=" + event.target.checked); //IsChecked property
}
//<input name={props.name} type="radio" value={answer.id}/>
//https://mui.com/material-ui/react-radio-button/
if(props.isSurveyFormat === true && props.data.length > 1)
{
  const radios = props.data.map((answer, index) =>
  
      <td key={index}>
        <Radio
        checked={selectedValue === answer.id}
        onChange={(event1) => handleChange(event1)}
        value={answer.id}
        name={props.name}
      />
        <label htmlFor={props.name}>{(props.isSurveyFormat===true ? "" : answer.title)}</label>
      </td>
   
);
answerElements.push(radios);

}else{
  const radios = props.data.map((answer, index) =>
  
      <span key={index}>
        <Radio
        checked={selectedValue === answer.id}
        onChange={(event1) => handleChange(event1)}
        value={answer.id}
        name={props.name}
      />
        <label htmlFor={props.name}>{(props.isSurveyFormat===true ? "" : answer.title)}</label>
      </span>
   
);
answerElements.push(radios);
}
  
return (answerElements);
}
export default WithCommentsBlock(RadioButton);