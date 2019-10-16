import React from "react";
import TableHead from "../TableHead";
import TableBody from "../TableBody";

const Calendar = ({ weekdays, slotStatus, book }) => (
  <table style={{ width: "100%" }}>
    <TableHead weekdays={weekdays} />
    <TableBody weekdays={weekdays} slotStatus={slotStatus} book={book} />
  </table>
);

export default Calendar;
