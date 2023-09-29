import PublicLayout from "../Layout/PublicLayout";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import blog from "../../public/assets/Blog/1.jpg";
import Image from "next/image";
import { Form } from "react-bootstrap";
import Link from "next/link";
const breadcrumbsData = [
  {
    label: <i className="fa fa-home" aria-hidden="true"></i>,
    path: "/",
  },
  {
    label: "Contact",
    path: "",
  },
];
const Contact = () => {
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
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Shop">
        <div className="container">
          <div className="contact">
            <Row className="">
              <Col xl={3} lg={4} md={6}>
                <div className="contact-rich">
                  <h4>Store information</h4>
                  <div className="block">
                    <div className="icon">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className="data">
                      Unified Organic Store
                      <br />
                      United States
                    </div>
                  </div>
                  <hr />
                  <div className="block">
                    <div className="icon">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="data">
                      Call Ua:
                      <br />
                      9876543210
                    </div>
                  </div>
                  <hr />
                  <div className="block">
                    <div className="icon">
                      <i className="fa fa-fax" aria-hidden="true"></i>
                    </div>
                    <div className="data">
                      Fax:
                      <br />
                      0123-456
                    </div>
                  </div>
                  <hr />
                  <div className="block">
                    <div className="icon">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="data">
                      Email us:
                      <br />
                      demo@demo.com
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={9} lg={8} md={6} sm={12} className="border_l singleBlog">
                <div className="s_b_comment blogSticky contact-rich">
                  <div className="authenHeading contactTitle">
                    <h3 className="authenText">CONTACT US</h3>
                  </div>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label> User Name</Form.Label>
                        <Form.Control required type="text" />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control required type="email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Row>
                    <div className="footerInput text-center">
                      <button type="submit" className="mb-1 main-button">
                        <a>Send</a>
                      </button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </PublicLayout>
    </>
  );
};

export default Contact;
