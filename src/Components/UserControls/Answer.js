import * as React from 'react';
import Grid from '@mui/material/Grid';

import ControlType from '../../Utils/ContolType';

import CheckBox from '../Controls/CheckBox';
import RadioGroupButton from '../Controls/RadioGroupButton';
import RadioButton from '../Controls/RadioButton';
import TextBox from '../Controls/TextBox';
import DateControl from '../Controls/DateControl';
import TimeControl from '../Controls/TimeControl';
import RatingControl from '../Controls/RatingControl';
import DateRangeControl from '../Controls/DateRangeControl';
import MatrixControl from '../Controls/MatrixControl';



export default function Answer(props) {

  
  //console.log(props)
  if(props.isSurveyFormat=== true && props.controlType === ControlType.RadioButton)
  {
    return (
      <RadioButton hasComments={props.hasComments} data={props.data} isSurveyFormat={props.isSurveyFormat || false} questionId={props.questionId} mainQuestionId={props.mainQuestionId}></RadioButton>
    )
  }


  return (
    <Grid item xs={12}>
      {props.controlType === ControlType.CheckBox &&
        <CheckBox hasComments={props.hasComments} data={props.data} questionId={props.questionId} mainQuestionId={props.mainQuestionId}></CheckBox>
      }

      {props.controlType === ControlType.RadioGroupButton &&
        <RadioGroupButton hasComments={props.hasComments} data={props.data} isSurveyFormat={props.isSurveyFormat || false} mainQuestionId={props.mainQuestionId} questionId={props.questionId}></RadioGroupButton>
      }
      {props.controlType === ControlType.RadioButton &&
        <RadioButton hasComments={props.hasComments} data={props.data} isSurveyFormat={props.isSurveyFormat || false} mainQuestionId={props.mainQuestionId} questionId={props.questionId}></RadioButton>
      }

      {props.controlType === ControlType.TextBox &&
        <TextBox questionId={props.questionId} mainQuestionId={props.mainQuestionId} IsHOC={false} ></TextBox>
      }
      
      {props.controlType === ControlType.Date &&
        <DateControl questionId={props.questionId} mainQuestionId={props.mainQuestionId}></DateControl>
      }

      {props.controlType === ControlType.Time &&
        <TimeControl></TimeControl>
      }
      {props.controlType === ControlType.Rating &&
        <RatingControl></RatingControl>
      }
      {props.controlType === ControlType.DateRange &&
        <DateRangeControl></DateRangeControl>
      }
      {props.controlType === ControlType.MatrixControl &&
        <MatrixControl  hasComments={props.hasComments} controlType={props.controlType} data={props.data} isSurveyFormat={props.isSurveyFormat} mainColumnTitle={props.mainColumnTitle} mainQuestionId={props.mainQuestionId}></MatrixControl>
      }
      
  
    </Grid>
  );
}

