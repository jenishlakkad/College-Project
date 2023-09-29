import React from "react";
import { Row, Col } from "react-bootstrap";
import Beer from "./Beer";
import Chips from "./Chips";
import Chocolate from "./Chocolate";
import MixedMilk from "./MixedMilk";
import MilkPacket from "./MilkPacket";

const Categories = () => {
  return (
    <>
      <div className="bg-light cate-bg categoriesTab">
        <div className="container">
          <div>
            <Row>
              <Col>
                <h2 className="heading headingSpacing">
                  <span>Featured Products</span>
                </h2>
              </Col>
              <Col className="cateTabCol">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Milk Packet
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Mixed 
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Chips
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-chips-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-chips"
                      type="button"
                      role="tab"
                      aria-controls="pills-chips"
                      aria-selected="false"
                    >
                      Beer
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-chocolate-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-chocolate"
                      type="button"
                      role="tab"
                      aria-controls="pills-chocolate"
                      aria-selected="false"
                    >
                      Chocolate
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <MilkPacket />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <MixedMilk />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <Chips />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-chips"
                    role="tabpanel"
                    aria-labelledby="pills-chips-tab"
                  >
                    <Beer />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-chocolate"
                    role="tabpanel"
                    aria-labelledby="pills-chocolate-tab"
                  >
                    <Chocolate />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
