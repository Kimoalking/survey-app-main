import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Typography,Rating } from '@mui/material';
import WithCommentsBlock from '../../HOC/WithCommentsBox';
//https://mui.com/material-ui/react-rating/
const RatingControl = (props) => {
  const [value, setValue] = React.useState(null); //null
  
  return (
    <>
    <Typography component="legend"></Typography>
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
    </>
  );
}
export default WithCommentsBlock(RatingControl);