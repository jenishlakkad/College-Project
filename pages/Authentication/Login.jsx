import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Link from "next/link";
const Login = () => {
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
        <div className="loginpage">
          <div>
            <div className="authenHeading">
              <h3 className="authenText">Log in to your account </h3>
            </div>
            <div className=" p-3 p-sm-4 card border" id="login">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group
                  md="4"
                  className="mb-3"
                  controlId="validationCustomUsername"
                >
                  <Form.Label className=" f-16 ">Username</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
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
                  <Form.Label className="f-16">Password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your password.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <button type="button" className="authenticationBtn">
                  <Link href="/">
                    <a>Back</a>
                  </Link>
                </button>
                <button
                  type="submit"
                  className="mb-3 authenticationBtn float-xl-end float-lg-end float-md-end float-sm-end f-r"
                  href="/"
                >
                  <a className="">Submit</a>
                </button>
              </Form>
              <div className="pass_acc border-top f-16 pt-3">
                <span className="forgot_password ">
                  <Link href="/Authentication/ForgotPassword">
                    <a>Forgot your password? </a>
                  </Link>
                </span>
                <span className="no_account float-xl-end float-lg-end float-md-end">
                  No account?
                  <Link href="/Authentication/Register">
                    <a> Create one here</a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;
