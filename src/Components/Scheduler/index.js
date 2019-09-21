import React, { useState } from 'react';
import Calendar from "../Calendar";
import moment from 'moment';
import { getWeekDays } from "../../Helpers";

const Schedular = () => {

    const [weekCounter, setWeekCounter] = useState(0)
    const [weekDays, setWeekDays] = useState(getWeekDays(moment().add(weekCounter, 'weeks')))

    return (
        <Calendar weekdays={weekDays} />
    )
}

export default Schedular;