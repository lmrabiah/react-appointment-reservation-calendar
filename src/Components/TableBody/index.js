import React from 'react';
import { timeSlots } from '../../Helpers';
import TableBodyCell from '../TableBodyCell';

const TableBody = props => {
    return (
        <tbody>
            {
                timeSlots().map((timeSlot, index) =>
                    <tr key={index}>
                        <td className="timeslot-label">{timeSlot.formattedHour}</td>
                        {
                            props.weekdays.map((weekday, weekdayIndex) => 
                                <TableBodyCell 
                                    key={weekdayIndex} 
                                    {...weekday}
                                    timeslot={timeSlot.hour}
                                    slotStatus={props.slotStatus}
                                 />
                            )
                        }
                    </tr>
                )
            }
        </tbody>
    )
}

export default TableBody;