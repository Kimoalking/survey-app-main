import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MatrixQuestionItem from '../UserControls/MatrixQuestionItem'
import WithCommentsBlock from '../../HOC/WithCommentsBox';
import '../../Context/css/custom.css'
const MatrixControl = (props) => {
  
    const MatrixHeader = [];
    const questionList = props.data.map((question) =>
    {
      return  (<MatrixQuestionItem key={question.title} data={question} controlType={question.controlType} isSurveyFormat={props.isSurveyFormat}/>)
    }
    ); 
    //var MatrixHeader  = (<><th key="123">Question</th><th className='customSpacing'><table width="100%"><thead><th>yes</th><th>No</th><th>NA</th></thead></table></th></>);
    
    if(props.isSurveyFormat)
    {
      debugger;
      //props.data.map((answersArray) => {
        var FirstQuestionArray = props.data[0].answers;
        
        for (var i = 0; i < FirstQuestionArray.length; i++) {
         
          MatrixHeader.push(<th key={FirstQuestionArray[i].id}>{FirstQuestionArray[i].title}</th>);
        };
        //});
    }

	
    
debugger;
console.log(questionList) ;
    console.log(MatrixHeader) ;
    
    return (
      <>
        <h2>{props.data.title}</h2>
        <table className="table table-bordered">
        <thead>
         <tr>
            <th key={uuidv4()}>{props.mainColumnTitle}</th> 
            <th className='customSpacing'>
              <table width="100%">
                <thead>
                  {MatrixHeader}
                </thead>
              </table>
            </th>
        </tr>
        </thead>
          <tbody>
            {questionList}
          </tbody>
        </table>
      </>
  )
}
export default WithCommentsBlock(MatrixControl);

