import React from 'react';
import { getDayString, getDate } from '../../Helpers';

const TableHeadCell = props => (
    <th className="text-center">
        <span>
            <b>{getDayString(props.weekday)}</b> <br />
            <b>{getDate(props.weekday)}</b>
        </span>
    </th>
)

export default TableHeadCell;