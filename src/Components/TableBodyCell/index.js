import React from 'react';

const TableBodyCell = props => {
    return(
        <>
            {
                props.slotStatus(props.weekday, props.timeslot) === 'past' ?
                <td className="text-center">
                    <div className="button-container" style={{backgroundColor: '#d8d8d8'}}>
                        
                    </div>
                </td> :
                    <td className="text-center">
                    <div className="button-container">
                        SELECT
                    </div>
                </td>
            }
        </>
    )
}

export default TableBodyCell;