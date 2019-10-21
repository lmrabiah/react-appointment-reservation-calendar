import React from "react";

const TableBodyCell = ({ slotStatus, weekday, timeslot, book }) => {
  const status = slotStatus(weekday, timeslot);
  return (
    <>
      {status !== "available" ? (
        <td className="text-center">
          <div
            className="button-container"
            style={{ backgroundColor: "#d8d8d8" }}
          >
            {status === "booked" ? "BOOKED" : null}
          </div>
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
