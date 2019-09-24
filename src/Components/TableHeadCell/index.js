import React from 'react';
import { getDayString, getDate } from '../../Helpers';

const TableHeadCell = props => (
    <th width="12.5%" className="text-center sticky-header">
        <span>
            <b>{getDayString(props.weekday)}</b> <br />
            <b>{getDate(props.weekday)}</b>
        </span>
    </th>
)

export default TableHeadCell;