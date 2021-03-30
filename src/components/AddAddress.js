import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import AddBranch from "./AddBranch";

const AddAddress = (props) => {
  return (
    <div>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="addressLine1">Address Line 1</Label>
            <Input
              type="textarea"
              name="addressLine1"
              id="addressLine1"
              placeholder="Address Line 1"
            />
          </FormGroup>
        </Col>

        <Col md={12}>
          <FormGroup>
            <Label for="addressLine2">Address Line </Label>
            <Input
              type="textarea"
              name="addressLine2"
              id="addressLine2"
              placeholder="Address Line 2"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" id="city" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="district">District</Label>
            <Input type="text" name="district" id="district" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="state">State</Label>
            <Input type="text" name="state" id="state" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="country">Country</Label>
            <Input type="text" name="country" id="country" />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default AddAddress;
