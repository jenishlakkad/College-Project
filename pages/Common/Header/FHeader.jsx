import { Row, Col, Button } from "react-bootstrap";
import { Hlocation, Hmail, Phone, Truck } from "../../../styles/Svg";
import Link from "next/link";

import Image from "next/image";
import c1 from "../../../public/assets/country/1.jpg";
import c2 from "../../../public/assets/country/2.jpg";
import c3 from "../../../public/assets/country/3.jpg";
import c4 from "../../../public/assets/country/4.jpg";
import c5 from "../../../public/assets/country/5.jpg";
import c6 from "../../../public/assets/country/6.jpg";
import c7 from "../../../public/assets/country/7.jpg";
import c8 from "../../../public/assets/country/8.jpg";
import c9 from "../../../public/assets/country/9.jpg";
import c10 from "../../../public/assets/country/10.jpg";
const FHeader = () => {
  return (
    <>
      <div className="bg-light top-pati">
        <div className="container">
          <Row>
            <Col xl={5} lg={5} md={5} className="top-left">
              <ul>
                <li className="d-inline-block ">
                  <Phone />
                  <span>+2354 3256 326</span>
                </li>
                <li className="d-inline-block">
                  <Hmail />
                  <span>demo@example.com</span>
                </li>
              </ul>
            </Col>

            <Col xl={7} lg={7} md={7} className="fFooterRightMenu">
              <ul>
                <li className="d-inline-block">
                  <Hlocation />
                  <span>Store Location</span>
                </li>
                <li className="d-inline-block">
                  <Truck />
                  <span>Track Your Order</span>
                </li>
                <li className="d-inline-block">
                  <div className="fFooterDropdown">
                    <div
                      className="btn-link"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span> English</span>
                      <i className="fas fa-angle-down"></i>
                    </div>
                    <ul
                      className="dropdown-menu dropdown-menu-left language"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Image src={c1} alt="banner2" />
                        English
                      </li>

                      <li>
                        <Image src={c2} alt="banner2" />
                        اللغة العربية
                      </li>
                      <li>
                        <Image src={c3} alt="banner2" />
                        Español
                      </li>
                      <li>
                        <Image src={c4} alt="banner2" />
                        Français
                      </li>
                      <li>
                        <Image src={c5} alt="banner2" />
                        Italiano
                      </li>
                      <li>
                        <Image src={c6} alt="banner2" />
                        Português PT
                      </li>
                      <li>
                        <Image src={c7} alt="banner2" />
                        Deutsch
                      </li>
                      <li>
                        <Image src={c8} alt="banner2" />
                        Polski
                      </li>
                      <li>
                        <Image src={c9} alt="banner2" />
                        Русский
                      </li>
                      <li>
                        <Image src={c10} alt="banner2" />
                        Română
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d-inline-block">
                  <div className="fFooterDropdown">
                    <div
                      className="btn-link "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span> USD $ </span>
                      <i className="fas fa-angle-down"></i>
                    </div>
                    <ul
                      className="dropdown-menu dropdown-menu-left "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>EUR €</li>
                      <li>USD $</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default FHeader;
