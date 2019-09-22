import React from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { Button } from 'reactstrap';

import { dateSelectorLabel } from '../../Helpers';

const DateSelector = props => {

    const DateCustomInput = ({ onClick }) => (
      <Button className="example-custom-input" onClick={onClick}>
       { dateSelectorLabel(props.weekdays)}
      </Button>
    );

    return (
      <DatePicker
        selected={props.startdate.toDate()}
        onChange={date => props.handleClick(date)}
        customInput={<DateCustomInput />}
      />
    );
  };

export default DateSelector;