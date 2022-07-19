import * as React from 'react';
import MatrixQuestionItem from '../UserControls/MatrixQuestionItem'
import WithCommentsBlock from '../../HOC/WithCommentsBox';

const MatrixControl = (props) => {
  
    const questionList = props.data.map((question) =>
    {
      return  (<MatrixQuestionItem key={question.id} data={question} controlType={question.controlType} isSurveyFormat={props.isSurveyFormat}/>)
    }
    ); 
    var MatrixHeader = <th>Question</th>;
    if(props.isSurveyFormat)
    {
      props.data.map((answersArray) => {
        var FirstQuestionArray = answersArray.answers[0];
        for (var i = 0; i < FirstQuestionArray.length; i++) {
          debugger;
          FirstQuestionArray+=<th key={FirstQuestionArray[i].id}>{FirstQuestionArray[i].title}</th>;
        };
      });
    }
    console.log(props) ;
    
    return (
      <>
        <h2>{props.data.title}</h2>
        <table className="table table-bordered">
        <thead>
         <tr>
             {MatrixHeader}
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

