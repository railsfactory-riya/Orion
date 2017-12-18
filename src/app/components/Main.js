import React from "react";
import {Row, Button, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, controlid} from "react-bootstrap";

export const Main = (props) => {
  return (
    <Form horizontal>
      <h1>Sign In Page</h1>

      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={4}>
          <FormControl type="email" placeholder="Email" controlid="email" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={4}>
          <FormControl type="password" placeholder="Password" controlid="password" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button
            bsStyle="primary"
            onClick={() => props.signIn('Anna')}>
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};
