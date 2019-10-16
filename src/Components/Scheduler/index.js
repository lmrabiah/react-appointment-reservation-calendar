import React, { useState } from "react";
import Calendar from "../Calendar";
import moment from "moment";
import { getWeekDays } from "../../Helpers";
import CalendarControls from "../CalendarControls";
import { Container } from "reactstrap";

const Schedular = () => {
  const [weekCounter, setWeekCounter] = useState(0);
  const [weekDays, setWeekDays] = useState(
    getWeekDays(moment().add(weekCounter, "weeks"))
  );
  const [startDate, setStartDate] = useState(moment());

  // the event handler for the NEXT and PREVIOUS week button
  const handlePrevNextWeekButtons = type => {
    const newWeekCounter = type === "next" ? weekCounter + 1 : weekCounter - 1;

    const newWeek = moment().add(newWeekCounter, "weeks");
    setWeekCounter(newWeekCounter);
    setWeekDays(getWeekDays(newWeek));
    setStartDate(newWeek);
  };

  // changes the calender week to the week selected on the date picker
  const handleDatePickerChange = datePickerValue => {
    const currentDate = moment().add(weekCounter, "weeks");
    const selectedDate = moment(datePickerValue);
    const difference = selectedDate.diff(currentDate, "weeks");
    const newWeekCounter = weekCounter + difference;

    const newWeek = moment().add(newWeekCounter, "weeks");
    setWeekCounter(newWeekCounter);
    setWeekDays(getWeekDays(newWeek));
    setStartDate(newWeek);
  };

  // determines if the timeslot is booked, past or available to be booked
  const timeSlotStatus = (slotDate, slotTime) => {
    const slotDateTime = moment(slotDate).add(slotTime, "hour");
    if (moment().diff(slotDateTime) >= 0) return "past";
    else return "present";
  };

  return (
    <Container>
      <CalendarControls
        handleDatePickerChange={handleDatePickerChange}
        handleClick={handlePrevNextWeekButtons}
        weekdays={weekDays}
        startDate={startDate}
      />
      <Calendar weekdays={weekDays} slotStatus={timeSlotStatus} />
    </Container>
  );
};

export default Schedular;
