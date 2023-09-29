import React from "react";
import Link from "next/link";
import Image from "next/image";

const MobileVerticalMenu = () => {
  return (
    <>
      <div>
        <div className="mobile-menu bg-white">
          <div id="mySidenav" className="sidenav 	">
            <div className=" navbar-collapse" id="navbarSupportedContent">
              <ul className=" navbar navbar-nav">
                <li>
                  <Link href="/">
                    <a className="mobileTitleText">Home</a>
                  </Link>
                </li>

                <li className=" dropdown">
                  <a
                    className=" dropdown-toggle mobileTitleText"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home Accessories&nbsp;
                    <span className="float-end mt-1"></span>
                  </a>

                  <ul className="dropdown-menu ">
                    <li>
                      <ul className="row mx-0 list-unstyled">
                        <li className="mg_menu col-lg-4 col-md-12 ">
                          <ul className="list-unstyled">
                            <li className="h_title">Milk Packet</li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Chips</a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">
                                  Standardized milk
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Beer</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mg_menu col-lg-4 col-md-12">
                          <ul className="list-unstyled">
                            <li className="h_title   ">Fruits</li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Beer</a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">
                                  Standardized milk
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Coffee</a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Chocolate</a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item "> Non veg</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        {/* <li className="mg_menu col-lg-4 col-md-12">
                          <ul>
                            <li className="h_title   ">
                              Fruits
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Papaya</a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Watermelon</a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Dragonfruit</a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Strawberry</a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Blueberry</a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Blackberry</a>
                              </Link>
                            </li>
                            <li className="d-block">
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Gooseberry</a>
                              </Link>
                            </li>
                          </ul>
                        </li> */}
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown ">
                  <a
                    className="dropdown-toggle mobileTitleText"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Stationery
                    <span className="float-end mt-1"></span>
                  </a>

                  <ul className="dropdown-menu list-unstyled">
                    <li>
                      <ul className="row mx-0 list-unstyled">
                        <li className="mg_menu col-lg-6 col-md-12 ">
                          <ul className="list-unstyled">
                            <li className="h_title    ">Chips</li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Milk Packet</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Beer</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Chocolate</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Milk</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Coffee</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mg_menu col-lg-6 col-md-12">
                          <ul className="list-unstyled">
                            <li className="h_title  ">Coffee</li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Mixed Milk</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Chocolate</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Chips</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mg_menu col-lg-6 col-md-12">
                          <ul className="list-unstyled">
                            <li className="h_title  ">Chocolate</li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Chocolate</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">
                                  Home Accessories
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ProductList/ProductList">
                                <a className="dropdown-item ">Chips</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href="/OtherMenu/Contact">
                    <a className="mobileTitleText">Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ProductList/ProductList">
                    <a className="mobileTitleText">Letest</a>
                  </Link>
                </li>
                <li>
                  <Link href="/OtherMenu/Contact">
                    <a className="mobileTitleText">Sitemap</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ProductList/ProductList">
                    <a className="mobileTitleText">Special</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ProductList/ProductList">
                    <a className="mobileTitleText">Best Seller</a>
                  </Link>
                </li>
                <li>
                  <Link href="/OtherPage/Delivery">
                    <a className="mobileTitleText">Delivery</a>
                  </Link>
                </li>
                <li>
                  <Link href="/OtherPage/Legal">
                    <a className="mobileTitleText">Legal Notice</a>
                  </Link>
                </li>
                <li>
                  <Link href="/OtherPage/Term">
                    <a className="mobileTitleText">Term And Condition </a>
                  </Link>
                </li>
                <li>
                  <Link href="/OtherPage/About">
                    <a className="mobileTitleText">About Us </a>
                  </Link>
                </li>
                <li>
                  <Link href="/OtherPage/Secure">
                    <a className="mobileTitleText">Secure Payment </a>
                  </Link>
                </li>
                <li>
                  <Link href="/OtherPage/Secure">
                    <a className="mobileTitleText">Secure Payment </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileVerticalMenu;
