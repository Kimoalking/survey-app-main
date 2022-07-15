import React from 'react'
import QuestionItem from './QuestionItem'

export default function SurveyPage(props) {
    debugger;
    const questionList = props.data.questions.map((question) =>
    {
    debugger;
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