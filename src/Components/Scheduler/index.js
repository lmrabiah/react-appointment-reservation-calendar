import React, { useState } from 'react';
import Calendar from "../Calendar";
import moment from 'moment';
import { getWeekDays } from "../../Helpers";
import CalendarControls from '../CalendarControls';
import { 
    Container
} from 'reactstrap';

const Schedular = () => {

    const [weekCounter, setWeekCounter] = useState(0)
    const [weekDays, setWeekDays] = useState(getWeekDays(moment().add(weekCounter, 'weeks')))
    const [startDate, setStartDate] = useState(moment());

    const handlePrevNextWeekButtons = type => {
        const newWeekCounter = (type === 'next') ? weekCounter+1 : weekCounter-1;
        const newWeek = moment().add(newWeekCounter, 'weeks');
        setWeekCounter(newWeekCounter)
        setWeekDays(getWeekDays(newWeek))
        setStartDate(newWeek);
    }

    const handleDatePickerChange = datePickerValue => {

        const currentDate = moment().add(weekCounter, 'weeks');
        const selectedDate = moment(datePickerValue);
        const difference = selectedDate.diff(currentDate, 'weeks');
        const newWeekCounter = weekCounter + difference;
        const newWeek = moment().add(newWeekCounter, 'weeks')
        
        setWeekCounter(newWeekCounter)
        setWeekDays(getWeekDays(newWeek))
        setStartDate(newWeek)
    }

    return (
        <Container>
            <CalendarControls
            handleDatePickerChange={handleDatePickerChange} 
            handleClick={handlePrevNextWeekButtons}
            weekdays={weekDays}
            startDate={startDate} />
            <Calendar weekdays={weekDays} />
        </Container>
        
    )
}

export default Schedular;