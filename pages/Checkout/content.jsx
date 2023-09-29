import React from "react";
import { Accordion, Col, Row, Tab, Tabs } from "react-bootstrap";
import Address from "./address";
import Orderasguest from "./orderasguest";
import Payment from "./payment";
import ShippingMethod from "./shippingmethod";
import SignIn from "./signin";

const Content = () => {
  return (
    <>
      <div className="container deal_of_container">
        <div className="checkout" id="checkout">
          <Row>
            <Col xl={8} lg={8} md={12} className="contextForm">
              <Accordion defaultActiveKey="0" className="card">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Personal Information</Accordion.Header>
                  <Accordion.Body>
                    <Tabs
                      defaultActiveKey="overguest"
                      id="uncontrolled-tab-example"
                      className="mb-xl-3 mb-lg-3 mb-md-3 mb-sm-2"
                    >
                      <Tab eventKey="overguest" title="Order As A Guest">
                        <Orderasguest />
                      </Tab>
                      <Tab eventKey="Sign In" title="Sign In">
                        <SignIn />
                      </Tab>
                    </Tabs>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Address</Accordion.Header>
                  <Accordion.Body>
                    <Address />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Shipping Method</Accordion.Header>
                  <Accordion.Body>
                    <ShippingMethod />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Payment</Accordion.Header>
                  <Accordion.Body>
                    <Payment />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xl={4} lg={4} md={6}>
              <div className="border rounded bg-white final_payment">
                <div className="card-body  border-bottom">
                  <p className="text-muted">5 items</p>
                  <p className="fw-bolder">show details</p>
                  <div>
                    <span className="fw-bold">subtotal</span>
                    <span className="float-end fw-bold">$94.00</span>
                  </div>
                  <div>
                    <span className="fw-bold">shipping</span>
                    <span className="float-end fw-bold">$9.00</span>
                  </div>
                </div>
                <div className="card-body ">
                  <div>
                    <span className="fw-bold">total(tax excl.)</span>
                    <span className="float-end fw-bold">$94.00</span>
                  </div>
                  <div>
                    <span className="fw-bold">taxes</span>
                    <span className="float-end fw-bold">$9.00</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Content;
