import React from "react";
import { Row, Col } from "react-bootstrap";
import icon1 from "../../../public/assets/icon/icon1.png";
import icon2 from "../../../public/assets/icon/icon2.png";
import icon3 from "../../../public/assets/icon/icon3.png";
import icon4 from "../../../public/assets/icon/icon4.png";
import icon5 from "../../../public/assets/icon/icon5.png";

import Image from "next/image";
const FFooter = () => {
  return (
    <>
      <div className="firstFooter">
        <Row>
          <Col xl={3} lg={3} md={3} sm={12} className="footerbox">
            <ul className="list-unstyled">
              <li className="block-img">
                <span className="blockimg1">
                  <Image src={icon1} alt="Review" />
                </span>
              </li>
              <li className="footerboxText">
                <h4>Free Shipping</h4>
                <p>Deliver to door</p>
              </li>
            </ul>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} className="footerbox">
            <ul className="list-unstyled">
              <li className="block-img">
                <span className="blockimg1">
                  <Image src={icon2} alt="Review" />
                </span>
              </li>
              <li className="footerboxText">
                <h4>24 X 7 Supports</h4>
                <p>In safe Hands</p>
              </li>
            </ul>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} className="footerbox">
            <ul className="list-unstyled">
              <li className="block-img">
                <span className="blockimg1">
                  <Image src={icon3} alt="Review" />
                </span>
              </li>
              <li className="footerboxText">
                <h4>Big Saving</h4>
                <p>At Lowest Price</p>
              </li>
            </ul>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} className="footerbox">
            <ul className="list-unstyled">
              <li className="block-img">
                <span className="blockimg1">
                  <Image src={icon4} alt="Review" />
                </span>
              </li>
              <li className="footerboxText">
                <h4>Money Back</h4>
                <p>Easy to return</p>
              </li>
            </ul>
          </Col>
          <Col xl={3} lg={3} md={3} sm={12} className="footerbox">
            <ul className="list-unstyled">
              <li className="block-img">
                <span className="blockimg1">
                  <Image src={icon5} alt="Review" />
                </span>
              </li>
              <li className="footerboxText">
                <h4>Online Store</h4>
                <p>a Huge Branding</p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FFooter;
