import * as React from 'react';
import Grid from '@mui/material/Grid';
import CheckBox from './CheckBox';
import RadioButton from './RadioButton';
import TextBox from './TextBox';
import DateControl from './DateControl';
import TimeControl from './TimeControl';
import ControlType from '../Utils/ContolType';
export default function Answer(props) {
  console.log(props)
  return (
    <Grid item xs={12}>
      {props.controlType === ControlType.CheckBox &&
        <CheckBox hasComments={props.hasComments} data={props.data}></CheckBox>
      }

      {props.controlType === ControlType.RadioButton &&
        <RadioButton hasComments={props.hasComments} data={props.data}></RadioButton>
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
  
    </Grid>
  );
}

