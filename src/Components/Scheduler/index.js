import React, { Component } from "react";
import Calendar from "../Calendar";
import moment from "moment";
import { getWeekDays } from "../../Helpers";
import CalendarControls from "../CalendarControls";
import { Container } from "reactstrap";
import BookingForm from "../BookingForm";
import { getSlots } from "../../Helpers";

class Schedular extends Component {
  constructor(props) {
    super(props);
    this.toggleBookModal = this.toggleBookModal.bind(this);
    this.handlePrevNextWeekButtons = this.handlePrevNextWeekButtons.bind(this);
  }
  state = {
    weekCounter: 0,
    weekDays: getWeekDays(moment().add(0, "weeks")),
    startDate: moment(),
    bookModal: false,
    selectedTimeSlot: "",
    bookedSlots: []
  };

  toggleBookModal() {
    this.setState({ bookModal: !this.state.bookModal });
  }

  // the event handler for the NEXT and PREVIOUS week button
  handlePrevNextWeekButtons(type) {
    const weekCounter =
      type === "next" ? this.state.weekCounter + 1 : this.state.weekCounter - 1;

    const startDate = moment().add(weekCounter, "weeks");
    const weekDays = getWeekDays(startDate);

    this.getBookedSlots(weekDays);
    this.setState({ weekCounter, weekDays, startDate });
  }

  // changes the calender week to the week selected on the date picker
  handleDatePickerChange = datePickerValue => {
    const currentDate = moment().add(this.state.weekCounter, "weeks");
    const selectedDate = moment(datePickerValue);
    const difference = selectedDate.diff(currentDate, "weeks");
    const weekCounter = this.state.weekCounter + difference;

    const startDate = moment().add(weekCounter, "weeks");
    const weekDays = getWeekDays(startDate);

    this.getBookedSlots(weekDays);
    this.setState({ weekCounter, weekDays, startDate });
  };

  // determines if the timeslot is booked, past or available to be booked
  timeSlotStatus = (slotDate, slotTime) => {
    const slotDateTime = moment(slotDate).add(slotTime, "hour");
    if (moment().diff(slotDateTime) >= 0) return "past";
    else if (
      this.state.bookedSlots.find(
        item =>
          item.time.toString() ===
          slotDateTime.utc(true).format("YYYY-MM-DD HH:mm:ss")
      )
    )
      return "booked";
    else return "available";
  };

  book = (slotDate, slotTime) => {
    const selectedTimeSlot = moment(slotDate)
      .add(slotTime, "hour")
      .format();
    this.setState({ selectedTimeSlot });
    this.toggleBookModal();
  };

  // gets all the reserved slot for the currently shown dates
  getBookedSlots = async weekDays => {
    const from = moment(weekDays[0].weekday)
      .add(10, "hour")
      .utc(true)
      .format();
    const to = moment(weekDays[weekDays.length - 1].weekday)
      .add(23, "hour")
      .utc(true)
      .format();

    try {
      const bookedSlots = await getSlots(from, to);
      this.setState({ bookedSlots: bookedSlots.data });
      this.getBookedSlots(this.state.weekDays);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getBookedSlots(this.state.weekDays);
  }

  render() {
    return (
      <Container>
        <CalendarControls
          handleDatePickerChange={this.handleDatePickerChange}
          handleClick={this.handlePrevNextWeekButtons}
          weekdays={this.state.weekDays}
          startDate={this.state.startDate}
        />
        <Calendar
          weekdays={this.state.weekDays}
          slotStatus={this.timeSlotStatus}
          book={this.book}
        />

        <BookingForm
          isOpen={this.state.bookModal}
          toggle={this.toggleBookModal}
          selectedTimeSlot={this.state.selectedTimeSlot}
        />
      </Container>
    );
  }
}

export default Schedular;
