import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

const Calendar = props => (
    <table style={{width: '100%'}}>
        <TableHead weekdays={props.weekdays} />
        <TableBody weekdays={props.weekdays} slotStatus={props.slotStatus} />
    </table>
)

export default Calendar;