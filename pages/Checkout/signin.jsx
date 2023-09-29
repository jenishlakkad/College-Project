import Link from "next/link";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const SignIn = () => {
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
        <div className="checkout-signin">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
              md="4"
              className="mb-3"
              controlId="validationCustomUsername"
            >
              <Form.Label className="fw-bold mt-sm-3 mt-lg-1">
                Email Address
              </Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter your account name
                </Form.Control.Feedback>
              </InputGroup>
              <small id="emailHelp" className="form-text text-muted">
                We will never share your email with anyone else.
              </small>
            </Form.Group>
            <Form.Group
              md="4"
              className="mb-3"
              controlId="validationCustomUsername"
            >
              <Form.Label className="fw-bold">Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder=""
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
              <label className="checkout-check  ">Check me out</label>
            </InputGroup>
          </Form>

          <button type="submit" className="mb-3 processCheckOut d-inline-block">
            Submit
          </button>
          <span className="forgot_password  d-inline-block float-md-end float-xl-end float-lg-end">
            <Link href="/Authentication/ForgotPassword">
            <a>
              Forgot your password?
            </a>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
