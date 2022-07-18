import React from 'react';
import FormLabel from '@mui/material/FormLabel';
export default function Question(props){
    return(
        <FormLabel id={props.questionId}>{props.questionTitle}</FormLabel>
    );
}