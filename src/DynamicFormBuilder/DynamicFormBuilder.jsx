/** @format */

import react, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

class DynamicFormBulder extends Component {
  constructor(props) {
    super(props);
    this.state = { validated: false };
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;

    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });
  };
  render() {
    return (
      <>
        <h3> Dynamic Form Builder With Class Components</h3>

        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            {this.props.formJSON[0].fields.map((field) => {
              if (field.type === "select") {
                return (
                  <div key={field.label}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Select aria-label="Default select example">
                      {field.options.map((option) => (
                        <option value={option.label}>{option.label}</option>
                      ))}
                    </Form.Select>
                  </div>
                );
              } else if (field.type === "checkbox") {
                return (
                  <div key={field.label}>
                    <Form.Check
                      required={field.required}
                      label={field.label}
                      feedback={
                        field.required
                          ? "Please check that box before submit"
                          : undefined
                      }
                      feedbackType="invalid"
                    />
                  </div>
                );
              } else {
                return (
                  <>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                      required={field.required}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid {field.label}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </>
                );
              }
            })}
          </Form.Group>

          <Button type="submit">Submit form</Button>
        </Form>
      </>
    );
  }
}

export default DynamicFormBulder;
