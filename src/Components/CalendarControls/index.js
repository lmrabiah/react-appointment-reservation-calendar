import React from 'react';
import { 
    Row, 
    Col,
    Button 
} from 'reactstrap';
import DateSelector from '../DateSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const CalendarControls = props => {
    
    return(
        <Row className="calendar-buttons">
            <Col md="4" className="text-left">
                <Button
                    color="primary"
                    onClick={() => props.handleClick('prev')}
                ><FontAwesomeIcon icon={faArrowLeft} /> <span className="mt-1">PREVIOUS WEEK</span></Button>
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
                ><span>NEXT WEEK</span> <FontAwesomeIcon icon={faArrowRight} /></Button>
            </Col>
        </Row>
    )
}

export default CalendarControls;