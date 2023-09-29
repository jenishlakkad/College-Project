import React from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { Bold } from "../../../styles/Svg";
// import verBanner from '../../../public/assets/coff.jpg';
import MenuBanner from "../../../public/assets/m_menu.jpg";
import verBanner from "../../../public/assets/MenuV.jpg";

import Image from "next/image";
const THeader = () => {
  return (
    <>
      <div className="container">
        <Row className="thirdheader">
          <Col xl={2} lg={3} md={4} className="tHeadertogale">
            <div className="fFooterDropdown">
              <div
                className="btn-link "
                type="button"
                id="dropdownMenuButton1 wr-menu-icon"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <button className="btn-navbar navbar-toggle">
                  <div className="ico-menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </button>
                <span className="headerToggleText"> Brows All Categories </span>
              </div>
              <ul
                className="dropdown-menu dropdown-menu-left langcdrop"
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="singleMegamenu">
                  <Link href="/">
                    <a className="dropdown-item megaMenuTitle">Home</a>
                  </Link>
                </li>
                <li className="dropdown singleMegamenu">
                  <a
                    className="megaMenuTitle"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mixed Milk
                    <span className="float-end mt-1">
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </a>
                  <ul className="mega_menu optionHeader megaDropdown dropdown-menu list-unstyled">
                    <li>
                      <ul className="row mx-0 list-unstyled">
                        <li className="mg_menu col-lg-4 col-md-4">
                          <ul className="list-unstyled menuMainRow">
                            <li className="text-uppercase menuTitle">Chips</li>

                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Standardized milk
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Beer
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mg_menu col-lg-4 col-md-4">
                          <ul className="list-unstyled menuMainRow">
                            <li className="text-uppercase menuTitle">Chips</li>

                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Standardized milk
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Beer
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mg_menu col-lg-4 col-md-4">
                          <ul className="list-unstyled menuMainRow">
                            <li className="text-uppercase menuTitle">Chips</li>

                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Standardized milk
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Beer
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mg_menu col-lg-12 col-md-12 menuHoriBanner">
                          <Image src={MenuBanner} alt="menu-banner1" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown singleMegamenu">
                  <a
                    className="megaMenuTitle"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Stationery
                    <span className="float-end mt-1">
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </a>
                  <ul className="mega_menu optionHeader megaDropdown dropdown-menu list-unstyled">
                    <li>
                      <ul className="row mx-0 list-unstyled">
                        <li className="mg_menu col-lg-4 col-md-6 ">
                          <ul className="list-unstyled menuMainRow">
                            <li className="text-uppercase menuTitle">Chips</li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Chips
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Standardized milk
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Beer
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Stationery
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  chocolate
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Non veg
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="mg_menu col-lg-4 col-md-6 ">
                          <ul className="list-unstyled menuMainRow">
                            <li className="text-uppercase menuTitle">
                              Milk Packet
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Chips
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Non veg
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Stationery
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Milk Packet
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Chips
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mg_menu col-lg-4 col-md-12 p-0 menuHoriBanner">
                          <Image src={verBanner} alt="banner1" />
                        </li>
                        <li className="mg_menu col-lg-12">
                          <ul>
                            <li className=" text-uppercase font-weight-bold d-block text-end">
                              {/* <Image
                                  src={menu1}
                                  className="img-fluid mx-auto"
                                  alt="navbar"
                                /> */}
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown singleMegamenu">
                  <a
                    className="megaMenuTitle"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home Accessories
                    <span className="float-end mt-1">
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </a>
                  <ul className="mega_menu optionHeader megaDropdown dropdown-menu list-unstyled">
                    <li>
                      <ul className="row mx-0 list-unstyled">
                        <li className="mg_menu col-lg-4 col-md-4 ">
                          <ul className="list-unstyled menuMainRow">
                            <li className="text-uppercase menuTitle">
                              Milk Packet
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Chips
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Standardized milk
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Beer
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Stationery
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="mg_menu col-lg-4 col-md-4 ">
                          <ul className="list-unstyled menuMainRow">
                            <li className="text-uppercase menuTitle">
                              Stationery
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Chips
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Non veg
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Stationery
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Milk Packet
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mg_menu col-lg-4 col-md-4 ">
                          <ul className="list-unstyled menuMainRow">
                            <li className="text-uppercase menuTitle">
                              Home Accessories
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Beer
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Stationery
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder"></a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item font-weight-bolder">
                                  Milk Packet
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mg_menu col-lg-12">
                          <ul>
                            <li className=" text-uppercase font-weight-bold d-block text-end">
                              {/* <Image
                                  src={menu1}
                                  className="img-fluid mx-auto"
                                  alt="navbar"
                                /> */}
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="singleMegamenu">
                  <Link href="/ProductList/ProductList">
                    <a className="dropdown-item megaMenuTitle">Beer</a>
                  </Link>
                </li>
                <li className="singleMegamenu">
                  <Link href="/ProductList/ProductList">
                    <a className="dropdown-item megaMenuTitle">Stationery</a>
                  </Link>
                </li>
                <li className="singleMegamenu">
                  <Link href="/ProductList/ProductList">
                    <a className="dropdown-item megaMenuTitle">Contact Us</a>
                  </Link>
                </li>
                <li className="singleMegamenu">
                  <Link href="/ProductList/ProductList">
                    <a className="dropdown-item megaMenuTitle">Non Veg</a>
                  </Link>
                </li>
                <li className="singleMegamenu">
                  <Link href="/ProductList/ProductList">
                    <a className="dropdown-item megaMenuTitle">Chocolate</a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={10} lg={9} md={8}>
            <div className="tHeaderMenuList">
              <ul>
                <li>
                  <Link href="/ProductList/ProductList">
                    <a> Latest</a>
                  </Link>
                </li>
                <li>
                  <Link href="/OtherMenu/Contact">
                    <a> Contact us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/OtherMenu/Sitemap">
                    <a> Sitemap</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ProductList/ProductList">
                    <a> Special</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ProductList/ProductList">
                    <a> BestSeller</a>
                  </Link>
                </li>
                <li className="thirdHeaderOffer">
                  <div className="">
                    <Link href="/ProductList/ProductList">
                      <a>
                        <Bold />
                        <span>30% off on up to $55</span>
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default THeader;
