import * as React from 'react';
import MatrixQuestionItem from '../UserControls/MatrixQuestionItem'
import WithCommentsBlock from '../../HOC/WithCommentsBox';
import '../../Context/css/custom.css'
const MatrixControl = (props) => {
  
    const questionList = props.data.map((question) =>
    {
      return  (<MatrixQuestionItem key={question.id} data={question} controlType={question.controlType} isSurveyFormat={props.isSurveyFormat}/>)
    }
    ); 
    var MatrixHeader = (<><th key="123">Question</th><th className='customSpacing'><table width="100%"><thead><th>yes</th><th>No</th><th>NA</th></thead></table></th></>);
    
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

