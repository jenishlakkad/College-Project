import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import Link from "next/link";
const ForgotPassword = () => {
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
        <div className="container loginpage">
          <div className=" custom_container ">
            <div className="authenHeading">
              <h3 className="authenText">Forgot Your Password </h3>
            </div>

            <div
              id="forgot"
              className="page-content border card card-block p-3 p-sm-4"
            >
              <Row>
                <Col>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className="needs-validation "
                  >
                    <div className="form-group">
                      <p className="renew_pass text-muted ">
                        Please enter the email address you used to register. You
                        will receive a temporary link to reset your password.
                      </p>

                      <Form.Group
                        md="4"
                        className="mb-lg-4"
                        controlId="validationCustomUsername"
                      >
                        <Form.Label className="f-16">Email address</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="email"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Enter your mail id.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
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
                            <a> Send</a>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
