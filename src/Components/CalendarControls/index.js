import React from 'react';
import { 
    Row, 
    Col,
    Button 
} from 'reactstrap';
import DateSelector from '../DateSelector';


const CalendarControls = props => {
    
    return(
        <Row>
            <Col md="4" className="text-left">
                <Button
                    color="primary"
                    onClick={() => props.handleClick('prev')}
                >PREVIOUS WEEK</Button>
            </Col>

            <Col md="4" className="text-center">
                <DateSelector 
                    startdate={props.startDate}
                    weekdays={props.weekdays}
                    handleClick={props.handleDatePickerChange}
                 />
            </Col>
            
            <Col md="4" className="text-right">
                <Button
                    color="primary"
                    onClick={() => props.handleClick('next')}
                >NEXT WEEK</Button>
            </Col>
        </Row>
    )
}

export default CalendarControls;