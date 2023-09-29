import React from "react";
import { Button, Form } from "react-bootstrap";
const Address = () => {
  return (
    <>
      <div>
        <Form>
          <Form.Group
            md="4"
            className=" mb_1rem"
            controlId="validationCustomUsername"
          >
            <Form.Label className="fw-bold">Line 1</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder=""
            />
          </Form.Group>
          <Form.Group
            md="4"
            className=" mb_1rem"
            controlId="validationCustomUsername"
          >
            <Form.Label className="fw-bold">Line 2</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder=""
            />
          </Form.Group>
          <Form.Group
            md="4"
            className=" mb_1rem"
            controlId="validationCustomUsername"
          >
            <Form.Label className="fw-bold">City</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder=""
            />
          </Form.Group>
          <Form.Group
            md="4"
            className=" mb_1rem"
            controlId="validationCustomUsername"
          >
            <Form.Label className="fw-bold">State</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder=""
            />
          </Form.Group>
          <Form.Group
            md="4"
            className=" mb_1rem"
            controlId="validationCustomUsername"
          >
            <Form.Label className="fw-bold">Post Code</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder=""
            />
          </Form.Group>
          <Form.Group
            md="4"
            className=" mb_1rem"
            controlId="validationCustomUsername"
          >
            <Form.Label className="fw-bold">Country</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder=""
            />
          </Form.Group>
          <button type="sumbit" className="processCheckOut d-inline-block">
            Reset
          </button>
          <button
            type="sumbit"
            className="processCheckOut d-inline-block float-end"
          >
            Save
          </button>
        </Form>
      </div>
    </>
  );
};

export default Address;
