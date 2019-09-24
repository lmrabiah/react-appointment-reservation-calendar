import React from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { Button } from 'reactstrap';

import { dateSelectorLabel } from '../../Helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const DateSelector = props => {

    const DateCustomInput = ({ onClick }) => (
      <Button 
        className="btn-date-picker" 
        onClick={onClick}>
       { dateSelectorLabel(props.weekdays)} <FontAwesomeIcon icon={faCalendarAlt} />
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