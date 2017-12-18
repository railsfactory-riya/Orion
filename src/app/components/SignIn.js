import React from "react";
import {Row, Button, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, controlid} from "react-bootstrap";

export const SignIn = (props) => {
  return (
    <Form horizontal>
      <h1>Sign In Page</h1>

      <FormGroup controlId="formHorizontalEmail">
        <Col sm={4}>
          <FormControl
            type="email"
            placeholder="Enter Your Email"
            controlid="email" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col sm={4}>
          <FormControl
            type="password"
            placeholder="Enter Your Password"
            controlid="password" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={1} sm={10}>
          <Button
            bsStyle="primary"
            onClick={() => props.clickSignIn()}>
            Sign in
          </Button>
          <Button
            bsStyle="danger">
            Clear Values
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};
