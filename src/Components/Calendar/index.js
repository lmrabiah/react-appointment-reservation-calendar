import React from 'react';
import TableHead from '../TableHead';

const Calendar = props => (
    <table style={{width: '100%'}}>
        <TableHead weekdays={props.weekdays} />
    </table>
)

export default Calendar;