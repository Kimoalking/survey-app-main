import React from 'react'
import QuestionItem from '../UserControls/QuestionItem'

export default function SurveyPage(props) {
    
    const questionList = props.data.questions.map((question) =>
    {
      return  (<QuestionItem key={question.id} data={question} controlType={question.controlType} />)
    }
    );

    if (props.isActive) {
        return (
            <>
                <h2>{props.data.title}</h2>
                {questionList}
            </>
        )
    }
    else {
        return (<></>)
    }
}