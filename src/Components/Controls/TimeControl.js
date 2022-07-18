import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TimePicker } from '@mui/lab';
import WithCommentsBlock from '../../HOC/WithCommentsBox';
//https://mui.com/x/react-date-pickers/time-picker/
const TimeControl = (props) => {
  const [value, setValue] = React.useState(new Date().toLocaleString()); //null
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <TimePicker
        label="Choose a Time"
        value={value}
        onChange={(newValue) => {
        setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
    />
    </LocalizationProvider>
  );
}
export default WithCommentsBlock(TimeControl);