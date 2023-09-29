import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { Cart, Eye, Heart, Search, User } from "../../../styles/Svg";
import { CartContext } from "../../_app";
import { useContext, useState } from "react";
import MobileHeader from "./MobileHeader";
const SHeader = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="borderBottom">
        <div className="container sHeader">
          <Row>
            <Col xl={2} lg={2} md={2}>
              <Link href="/">
                <a>
                  <Image src={logo} alt="LogoHeader" className="mobileLogo" />
                </a>
              </Link>
              <div className="mobileNone">
                <MobileHeader />
              </div>
            </Col>
            <Col xl={10} lg={10} md={10}>
              <div className="desktop-search row">
                <div className="col-xl-8 col-lg-9 col-md-8">
                  <div className="input-group btn-gp ">
                    <Search />
                    <input
                      className="search_query form-control float-xs-left"
                      type="text"
                      id="search_query_top"
                      name="s"
                      placeholder="Search entire store..."
                    />
                    <div className="input-group-btn">
                      <button className="button-search" type="submit">
                        search
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-4 text-end mobileSocialIcon">
                  <div className="fFooterDropdown">
                    <div
                      className="btn-link "
                      type="button"
                      id="dropdownMenuButton1 _desktop_user_info"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="user-info">
                        <span className="svgbg">
                          <User />
                        </span>
                        <span>Account</span>
                      </div>
                    </div>
                    <ul
                      className="dropdown-menu accountDropdown dropdown-menu-left "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link href="/Authentication/Login">
                          <a>Sign In</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ComWish/Compare">
                          <a> Compare</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="fFooterDropdown headWish">
                    <div
                      className="btn-link "
                      type="button"
                      id=" _desktop_user_info"
                      data-bs-toggle=""
                      aria-expanded="false"
                    >
                      <div className="user-info">
                        <span className="svgbg">
                          <Heart />
                        </span>
                        <span>
                          <Link href="/ComWish/Wishlist">
                            <a className="cartText">Wishlist</a>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="fFooterDropdown">
                    <div
                      className="btn-link "
                      type="button"
                      id=" _desktop_user_info"
                      data-bs-toggle=""
                      aria-expanded="false"
                    >
                      <div className="user-info">
                        <Link href="/cart" passHref>
                          <a>
                            <span className="svgbg">
                              <Cart />

                              <span className="pe-auto d-lg-inline-block d-md-none d-sm-none d-none align-middle font-weight-bolder"></span>
                              <span className="pe-auto price_cart d-md-inline-block align-middle font-weight-bolder">
                                {cart.length ?? "0"}
                              </span>
                            </span>
                            <span className="cartText">Cart</span>
                          </a>
                        </Link>
                      </div>
                    </div>
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

export default SHeader;
