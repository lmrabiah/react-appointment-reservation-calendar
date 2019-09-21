import React from 'react';
import TableHeadCell from '../TableHeadCell';

const TableHead = props => {
    return (
        <thead>
            <tr>
                <th>TIME</th>
                {
                    props.weekdays.map((item, index) =>
                        <TableHeadCell key={index} {...item} />
                    )
                }
            </tr>
        </thead>
    )
}

export default TableHead;