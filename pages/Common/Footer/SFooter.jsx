import { useState } from "react";
import { Col, Row, Button, Collapse } from "react-bootstrap";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import { Eye, Fax, Hmail, Home, Mail, Phone } from "../../../styles/Svg";
const SFooter = () => {
  const [Useopen, UsesetOpen] = useState(false);
  const [Sopen, SsetOpen] = useState(false);
  const [Copen, CsetOpen] = useState(false);
  const [Iopen, IsetOpen] = useState(false);
  return (
    <>
      <div className="footerMain">
        <Row>
          <Col xl={4} lg={4} md={4} sm={12}>
            <div className="fst_col FooterVertical">
              <div className="footer_title">
                <h5 className="footerLinkHeading">
                  <Image src={logo} alt="Footer" />
                </h5>
                <p className="foot-des">
                  Lorem Ipsum is simply dummy text of the is an printing and
                  typesetting industry..
                </p>
                <h5 className="contact-info footerLinkHeading">
                  Contact Information
                  <Button
                    className="Footer-button"
                    onClick={() => UsesetOpen(!Useopen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Useopen}
                  ></Button>
                </h5>
              </div>

              <Collapse in={Useopen}>
                <div className="" id="fproduct">
                  <ul className="add_row fFooterRow">
                    <li className="d-flex">
                      <div>
                        <Home />
                        {/* <Eye/> */}
                      </div>
                      <div className="data1">
                        <a className="footerData">
                          Unified Organic Store
                          <br /> United States
                        </a>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div>
                        <a>
                          <Phone />
                        </a>
                      </div>
                      <div>
                        <a className="footerData">610-403-403</a>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div>
                        <a>
                          <Fax />
                        </a>
                      </div>
                      <div>
                        <a className="footerData">91448 91403</a>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div>
                        <a>
                          <Mail />
                        </a>
                      </div>
                      <div>
                        <a className="footerData">demo@demo.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </Col>
          <Col xl={2} lg={2} md={4} sm={12}>
            <div className="sec_col  FooterVertical">
              <div className="footer_title">
                <h5 className=" footerLinkHeading">
                  Products
                  <Button
                    className="Footer-button"
                    onClick={() => SsetOpen(!Sopen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Sopen}
                  ></Button>
                </h5>
              </div>
              <Collapse in={Sopen}>
                <div className="footerData" id="sproduct">
                  <ul>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a>Prices drop</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a>New products</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a>Best sales</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/OtherMenu/Sitemap">
                        <a>Sitemap</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a>Stores</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a>Beer</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a>Chips</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a>Milk Packet</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </Col>
          <Col xl={3} lg={3} md={4} sm={12}>
            <div className="th_col FooterVertical">
              <div className="footer_title">
                <h5 className=" footerLinkHeading">
                  Our Company
                  <Button
                    className="Footer-button"
                    onClick={() => CsetOpen(!Copen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Copen}
                  ></Button>
                </h5>
              </div>
              <Collapse in={Copen}>
                <div className="footerData" id="tproduct">
                  <ul>
                    <li>
                      <Link href="/OtherPage/Delivery">
                        <a>Delivery</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/OtherPage/Legal">
                        <a>Legal Notice</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/OtherPage/Term">
                        <a>Terms and conditions of use</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/OtherPage/About">
                        <a>About us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/OtherPage/Secure">
                        <a>Secure payment</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/OtherMenu/Contact">
                        <a>Contact us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </Col>
          <Col xl={3} lg={3} md={12} sm={12}>
            <div className="th_col ">
              <div className="footer_title">
                <h5 className="block_newsletter">Newsletter</h5>
              </div>
              <div className="" id="tproduct">
                <ul>
                  <li className="fFooterRow">
                    <p>
                      You may unsubscribe at any moment. For that purpose,
                      please find our contact info in the legal notice.
                    </p>
                  </li>
                  <li className="footerInput">
                    <form method="post">
                      <div className="input-wrapper">
                        <Hmail />
                        <input
                          type="text"
                          placeholder="Your name"
                          id="validationCustom01"
                        />
                      </div>
                      <button className="subscribe" type="submit">Subscribe</button>
                    </form>
                  </li>
                  <li>
                    <div className="block-social">
                      <ul>
                        <li>
                          <a>
                            <i className="fa fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="fa fa-rss" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i
                              className="fa fa-youtube-play"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="fa fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SFooter;
