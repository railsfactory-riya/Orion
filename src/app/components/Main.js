import React from "react";
import {Row, Button, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox} from "react-bootstrap";

export const Main = (props) => {
  return (
    <div>
      <Row>
        <div className="col-xs-12">
          <h1>The Main Page</h1>
        </div>
      </Row>
      <Row>
        <div className="col-xs-12">
           <Button bsStyle="primary"
            onClick={() => props.changeUsername('Anna')}>Change the Username
          </Button>
        </div>
      </Row>
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={4}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={4}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" bsStyle="primary">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>

    </div>
  );
};
