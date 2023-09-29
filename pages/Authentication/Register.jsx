import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import Link from "next/link";
const Register = () => {
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
    <div className="authenticationBg">
      <div className="container">
        <div className="loginpage register">
          <div>
            <div className="authenHeading">
              <h3 className="authenText">Registration </h3>
            </div>

            <div className="login p-3 p-sm-4 card border" id="Registration">
              <div>
                <p className="pass_acc">
                  Already have an account?
                  <Link href="/Authentication/Login">
                    <a> Log in instead!</a>
                  </Link>
                </p>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col xl={6}>
                    <Form.Group
                      md="4"
                      className="mb-lg-3 mb-xl-4 mb-md-2 mb-sm-2 mb-res"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label className="f-16">First Name</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter name
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col xl={6}>
                    <Form.Group
                      md="4"
                      className="mb-lg-3 mb-xl-4 mb-md-2 mb-sm-2 mb-res"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label className="f-16">Last Name</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter Last name
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col xl={12}>
                    <Form.Group
                      md="4"
                      className="mb-lg-3 mb-xl-4 mb-md-2 mb-sm-2 mb-res"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label className="f-16">Email Address</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="email"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter Email Address
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col xl={12}>
                    <Form.Group
                      md="4"
                      className="mb-lg-3 mb-xl-4 mb-md-2 mb-sm-2 mb-res"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label className="f-16">Password</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="password"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter your password.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col xl={12}>
                    <Form.Group
                      md="4"
                      className="mb-lg-3 mb-xl-4 mb-md-2 mb-sm-2 mb-res"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label className="f-16">Birth Date</Form.Label>
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
                  </Col>
                </Row>
                <div className="d-flex justify-content-between">
                  <div>
                    <button type="button" className="authenticationBtn">
                      <Link href="/Authentication/Login">
                        <a>Back</a>
                      </Link>
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      href="/"
                      className="mb-1 authenticationBtn"
                    >
                      <Link href="/">
                      <a> Save</a>
                      </Link>
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
