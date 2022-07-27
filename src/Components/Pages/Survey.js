import React, {useState} from 'react';
import SurveyPage from './SurveyPage';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Pages from '../../Utils/DemoData'


import {useRecoilState, useRecoilValue} from 'recoil'
import {AnswersState} from  '../../States/AnswersAtom.js'


export default function Survey() {
    const [Answers, setAnswers] = useRecoilState(AnswersState)
    const Result =  "Answer Builder: "+  JSON.stringify(Answers);

    const[activePageSequence, setActivePageSequence] = useState(1);

    const surveyPages = Pages.map((page) =>
        <SurveyPage isActive={page.sequenceNo===activePageSequence} key={page.id} data={page} />
    );
    return (
        <Container>
            <Paper elevation={3} sx={{
                p: 2,
                m: 5,
                bgcolor: 'background.default',
                gap: 1,
            }} >
                {surveyPages}
            </Paper>
            <Button disabled={activePageSequence===1} onClick={()=>setActivePageSequence(activePageSequence-1)}>Previous</Button>
            <Button onClick={()=>setActivePageSequence(activePageSequence+1)}>Next</Button>
            <br/><br/>
            {Result}
        </Container>

    )
}