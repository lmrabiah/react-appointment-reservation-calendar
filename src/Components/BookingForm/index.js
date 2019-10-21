import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Button
} from "reactstrap";
import SimpleReactValidator from "simple-react-validator";
import { postSlot } from "../../Helpers";
import moment from "moment";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
  }

  state = {
    name: "",
    purpose: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitForm = async event => {
    event.preventDefault();
    if (this.validator.allValid()) {
      try {
        await postSlot({
          name: this.state.name,
          time: moment(this.props.selectedTimeSlot).format(
            "YYYY-MM-DD HH:mm:ss"
          )
        });
        this.props.toggle();
      } catch (error) {
        console.log(error);
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen} fade={false} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>Make A Booking</ModalHeader>
        <ModalBody>
          <h6>
            {" "}
            {moment(this.props.selectedTimeSlot).format(
              "h:mma on DD MMM, YYYY"
            )}
          </h6>
          <Form onSubmit={this.submitForm}>
            <FormGroup>
              <label>Name</label>
              <input
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              {this.validator.message("name", this.state.name, "required")}
            </FormGroup>

            <FormGroup>
              <label>Purpose</label>
              <input
                className="form-control"
                name="purpose"
                value={this.state.purpose}
                onChange={this.handleChange}
              />
              {this.validator.message(
                "purpose",
                this.state.purpose,
                "required"
              )}
            </FormGroup>

            <Button block color="primary">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}
