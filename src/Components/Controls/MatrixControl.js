import * as React from 'react';
import MatrixQuestionItem from '../UserControls/MatrixQuestionItem'
import WithCommentsBlock from '../../HOC/WithCommentsBox';

const MatrixControl = (props) => {
  //debugger;
    const questionList = props.data.map((question) =>
    {
      return  (<MatrixQuestionItem key={question.id} data={question} controlType={question.controlType} isSurveyFormat={props.isSurveyFormat}/>)
    }
    );
    console.log(props)
    
    return (
      <>
        <h2>{props.data.title}</h2>
        <table className="table table-bordered">
          <tbody>
            {questionList}
          </tbody>
        </table>
      </>
  )
}
export default WithCommentsBlock(MatrixControl);

