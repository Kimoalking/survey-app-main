import * as React from 'react';
import Grid from '@mui/material/Grid';

import ControlType from '../../Utils/ContolType';

import CheckBox from '../Controls/CheckBox';
import RadioButton from '../Controls/RadioButton';
import TextBox from '../Controls/TextBox';
import DateControl from '../Controls/DateControl';
import TimeControl from '../Controls/TimeControl';
import RatingControl from '../Controls/RatingControl';
import DateRangeControl from '../Controls/DateRangeControl';
import MatrixControl from '../Controls/MatrixControl';


export default function Answer(props) {
  debugger;
  //console.log(props)
  return (
    <Grid item xs={12}>
      {props.controlType === ControlType.CheckBox &&
        <CheckBox hasComments={props.hasComments} data={props.data}></CheckBox>
      }

      {props.controlType === ControlType.RadioButton &&
        <RadioButton hasComments={props.hasComments} data={props.data} isSurveyFormat={props.isSurveyFormat || false}></RadioButton>
      }

      {props.controlType === ControlType.TextBox &&
        <TextBox></TextBox>
      }
      
      {props.controlType === ControlType.Date &&
        <DateControl></DateControl>
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
        <MatrixControl  hasComments={props.hasComments} controlType={props.controlType} data={props.data} isSurveyFormat={props.isSurveyFormat}></MatrixControl>
      }
  
    </Grid>
  );
}

