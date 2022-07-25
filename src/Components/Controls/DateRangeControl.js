import React, { useState} from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import WithCommentsBlock from '../../HOC/WithCommentsBox';

//https://www.npmjs.com/package/react-date-range
//npm install react-date-range
 const  DateRangeControl =  (props) => {
  
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }
  function SetDateRange(dateRange){
    //console.log(dateRange);
    setState(dateRange)
  }
  return (
    <DateRangePicker
    onChange={item => SetDateRange([item.selection])}
    showSelectionPreview={true}
    moveRangeOnFirstSelection={false}
    months={2}
    ranges={state}
    direction="horizontal"
  />
  )
}

export default WithCommentsBlock(DateRangeControl);