import React from "react";
import { Row, Col } from "react-bootstrap";
import PublicLayout from "../Layout/PublicLayout";
const breadcrumbsData = [
  {
    label: <i className="fa fa-home" aria-hidden="true"></i>,
    path: "/",
  },
  {
    label: "About Us",
    path: "",
  },
];
const About = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Shop">
        <div className="container">
          <div className="authenHeading contactTitle">
            <h3 className="authenText">About Us</h3>
          </div>
          <Row>
            <Col xl={4} lg={4} md={12} xs={12}>
              <h5>Our company</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididun.
              </p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur
                adipisicing elit.
              </p>
              <p>
                Top quality products
                <br />
                Best customer service
                <br />
                30-days money back guarantee
              </p>
            </Col>
            <Col xl={4} lg={4} md={12} xs={12}>
              <h5>Our team</h5>
              <p className="text-muted">
                Lorem set sint occaecat cupidatat non
              </p>
              <p className="text-muted">
                Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo.
              </p>
            </Col>
            <Col xl={4} lg={4} md={12} xs={12}>
              <h5>Testimonials</h5>
              <p className="text-muted">
                “Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim.”
              </p>
              <p>- Lorem ipsum dolor sit</p>
              <p className="text-muted">
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet conse ctetur adipisicing elit. Lorem ipsum dolor
                sit amet conse ctetur adipisicing elit, sed do eiusmod.”
              </p>
              <p>- Ipsum dolor sit</p>
            </Col>
          </Row>
        </div>
      </PublicLayout>
    </>
  );
};
export default About;
