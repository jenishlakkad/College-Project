import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Deliverybox from "../../../public/assets/delivery.jpg";
import deliveryboy from "../../../public/assets/delivery-boy.png";
import cbanner from "../../../public/assets/cbanner-1.jpg";

const Delivery = () => {
  return (
    <>
      <div className="container centerb">
        <Row>
          <Col xl={5} lg={5} md={5} className="delivery">
            <div className="posi-relative">
              <Image className="" src={cbanner} alt="cbanner" />
              <div className="bannerdes">
                <div className="banner-des-width">
                  <h3>shop online or in Store &amp; Get</h3>
                  <a href="#">
                    <span>Learn More</span>
                  </a>
                  <h3>delivery to your Door</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={7} lg={7} md={7}>
            <div className="posi-relative secondBanner">
              <Image src={Deliverybox} alt="Deliverybanner2" />
              <div className="bannerdes">
                <div className="banner-des-width">
                  <h3>Now our app is avilable on phone Ios and Android</h3>
                  <ul className="list-inline list-unstyled foot-app d-inline-block">
                    <li>
                      <div className="fb1"></div>
                    </li>
                    <li>
                      <div className="fb2"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Delivery;
