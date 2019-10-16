import React from "react";

const TableBodyCell = ({ slotStatus, weekday, timeslot, book }) => {
  return (
    <>
      {slotStatus(weekday, timeslot) === "past" ? (
        <td className="text-center">
          <div
            className="button-container"
            style={{ backgroundColor: "#d8d8d8" }}
          ></div>
        </td>
      ) : (
        <td className="text-center">
          <div
            className="button-container book"
            onClick={() => book(weekday, timeslot)}
          >
            SELECT
          </div>
        </td>
      )}
    </>
  );
};

export default TableBodyCell;
