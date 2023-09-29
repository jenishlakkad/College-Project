import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const Orderasguest = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div>
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="form-group mb_1rem">
              <label className="fw-bold  social-title">Social title</label>
              <br />
              <span className="form-check d-inline-block radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gender_mr"
                />
                <label className="form-check-label d-inline-block">mr.</label>
              </span>
              <span className="form-check d-inline-block ml-2 radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gender_mrs"
                />
                <label className="form-check-label d-inline-block">mrs.</label>
              </span>
            </div>

            <Form.Group
              md="4"
              className="  mb_1rem"
              controlId="validationCustomUsername"
            >
              <Form.Label className="fw-bold">First Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter name
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group
              md="4"
              className=" mb_1rem"
              controlId="validationCustomUsername"
            >
              <Form.Label className="fw-bold">Last Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Last name
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group
              md="4"
              className=" mb_1rem"
              controlId="validationCustomUsername"
            >
              <Form.Label className="fw-bold">Email Address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Email Address
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group
              md="4"
              className="  mb_1rem"
              controlId="validationCustomUsername"
            >
              <Form.Label className="fw-bold">Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group
              md="4"
              className=" mb_1rem"
              controlId="validationCustomUsername"
            >
              <Form.Label className="fw-bold">Birth Date</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="date"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <InputGroup className="mb-3 mt-2">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <label className="checkout-check ">
                Sign up for our newsletter
              </label>
            </InputGroup>
            <InputGroup className="mb-3 mt-2">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <label className="checkout-check ">
                I agree to the terms and conditions
              </label>
            </InputGroup>

            <div>
              <button type="submit" href="/" className="processCheckOut">
                Save
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Orderasguest;
