import { Col, Form, Button, Collapse } from "react-bootstrap";
import { useState } from "react";

const Filter = () => {
  const [Useopen, UsesetOpen] = useState(false);
  const [Sopen, SsetOpen] = useState(false);
  const [Copen, CsetOpen] = useState(false);

  return (
    <>
      <div className="filter">
        <div className="block-categories">
          <h6>Chips</h6>
        </div>
        <div id="search_filters_wrapper">
          <div id="search_filters">
            <p className="text-uppercase h6 hidden-sm-down">Filter By</p>
            <div id="_desktop_search_filters_clear_all">
              <button>Clear All</button>
            </div>
            <section className="facet filter-none clearfix">
              <p className="h6 facet-title hidden-sm-down">
                Color
                <Button
                  className="Footer-button"
                  onClick={() => UsesetOpen(!Useopen)}
                  aria-controls="example-collapse-text"
                  aria-expanded={Useopen}
                ></Button>
              </p>
              <Collapse in={Useopen}>
                <ul id="facet_89911" className="list-unstyled">
                  <li>
                    <div className="filterColor fc-1"></div>
                    <span>White</span>
                  </li>
                  <li>
                    <div className="filterColor fc-2"></div>
                    <span>Yellow</span>
                  </li>
                </ul>
              </Collapse>
            </section>
            <section className="facet  filter-none clearfix">
              <p className="h6 facet-title hidden-sm-down">
                Size
                <Button
                  className="Footer-button"
                  onClick={() => SsetOpen(!Sopen)}
                  aria-controls="example-collapse-text"
                  aria-expanded={Sopen}
                ></Button>
              </p>
              <Collapse in={Sopen}>
                <ul className="list-unstyled">
                  <li>
                    <Form.Label className="form-check filterCheck">
                      <input
                        className="form-check-input filterColor"
                        type="checkbox"
                        value=""
                      />
                      <span className="form-check-label">S</span>
                      <span className="text-right float-end ">(1)</span>
                    </Form.Label>
                  </li>
                  <li>
                    <Form.Label className="form-check filterCheck">
                      <input
                        className="form-check-input filterColor"
                        type="checkbox"
                        value=""
                      />
                      <span className="form-check-label">M</span>
                      <span className="text-right float-end ">(1)</span>
                    </Form.Label>
                  </li>
                  <li>
                    <Form.Label className="form-check filterCheck">
                      <input
                        className="form-check-input filterColor"
                        type="checkbox"
                        value=""
                      />
                      <span className="form-check-label">L</span>
                      <span className="text-right float-end ">(1)</span>
                    </Form.Label>
                  </li>
                  <li>
                    <Form.Label className="form-check filterCheck">
                      <input
                        className="form-check-input filterColor"
                        type="checkbox"
                        value=""
                      />
                      <span className="form-check-label">XL</span>
                      <span className="text-right float-end ">(1)</span>
                    </Form.Label>
                  </li>
                </ul>
              </Collapse>
            </section>
            <section className="facet  filter-none  clearfix">
              <p className="h6 facet-title hidden-sm-down">
                PRICE
                <Button
                  className="Footer-button"
                  onClick={() => CsetOpen(!Copen)}
                  aria-controls="example-collapse-text"
                  aria-expanded={Copen}
                ></Button>
              </p>
              <Collapse in={Copen}>
                <div className="row filtervalue ">
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={6}
                    className="d-inline-block"
                  >
                    <Form.Label>min</Form.Label>
                    <Form.Control type="number" />
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={6}
                    className="d-inline-block"
                  >
                    <Form.Label>max</Form.Label>
                    <Form.Control type="number" />
                  </Col>
                </div>
              </Collapse>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
