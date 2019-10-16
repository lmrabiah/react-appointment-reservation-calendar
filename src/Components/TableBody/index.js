import React from "react";
import { timeSlots } from "../../Helpers";
import TableBodyCell from "../TableBodyCell";

const TableBody = ({ weekdays, slotStatus, book }) => {
  return (
    <tbody>
      {timeSlots().map((timeSlot, index) => (
        <tr key={index}>
          <td className="timeslot-label">{timeSlot.formattedHour}</td>
          {weekdays.map((weekday, weekdayIndex) => (
            <TableBodyCell
              key={weekdayIndex}
              {...weekday}
              timeslot={timeSlot.hour}
              slotStatus={slotStatus}
              book={book}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
