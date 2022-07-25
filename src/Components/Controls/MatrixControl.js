import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MatrixQuestionItem from '../UserControls/MatrixQuestionItem'
import WithCommentsBlock from '../../HOC/WithCommentsBox';
import '../../Context/css/custom.css'
const MatrixControl = (props) => {

    
  const questionList = props.data.map((question) =>
  {
    return  (<MatrixQuestionItem key={question.id} data={question} controlType={question.controlType} isSurveyFormat={props.isSurveyFormat} mainQuestionId={props.mainQuestionId}/>)
  }
  ); 
  //var MatrixHeader  = (<><th key="123">Question</th><th className='customSpacing'><table width="100%"><thead><th>yes</th><th>No</th><th>NA</th></thead></table></th></>);
  //https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
  const MatrixHeader = [];
  if(props.isSurveyFormat) 
  {

    //props.data.map((answersArray) => {
      var FirstQuestionArray = props.data[0].answers;
      
      for (var i = 0; i < FirstQuestionArray.length; i++) {
       
        MatrixHeader.push(<th key={FirstQuestionArray[i].id}>{FirstQuestionArray[i].title}</th>);
      };
      //});
  }


//console.log(questionList) ;
//console.log(MatrixHeader) ;
  
  return (
    <div key={uuidv4()}>
      <h2 key={uuidv4()}>{props.data.title}</h2>
      <table className="table table-bordered">
      <thead>
       <tr>
          <th>{props.mainColumnTitle}</th> 
          {MatrixHeader}
      </tr>
      </thead>
        <tbody>
          {questionList}
        </tbody>
      </table>
    </div>
)
}
export default WithCommentsBlock(MatrixControl);

