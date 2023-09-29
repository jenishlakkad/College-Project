import Link from "next/link";
import React from "react";
import { Row, Col } from "react-bootstrap";
import PublicLayout from "../Layout/PublicLayout";
const breadcrumbsData = [
  {
    label: <i className="fa fa-home" aria-hidden="true"></i>,
    path: "/",
  },
  {
    label: "Single News",
    path: "",
  },
];
const Sitemap = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Shop">
        <div className="sitemap container">
          <div className="authenHeading contactTitle">
            <h3 className="authenText">Sitemap</h3>
          </div>
          <Row>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className="contact-rich">
                <ul>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Chips</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">
                        Home Accessories
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Home</a>
                    </Link>
                  </li>
                  <ul>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">Beer</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">
                          Non veg
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">
                          Milk Packet
                        </a>
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className="contact-rich">
                <ul>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Chips</a>
                    </Link>
                  </li>
                  <ul>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">Beer</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">
                          Non veg
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">
                        Home Accessories
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Home</a>
                    </Link>
                  </li>
                  <ul>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">Beer</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">
                          Non veg
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">
                          Milk Packet
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Chips</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Milk</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">
                        Accessories
                      </a>
                    </Link>
                  </li>
                  <ul>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">
                          Stationery
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Beer</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className="contact-rich">
                <ul>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Log In</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">
                        Create new account
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className="contact-rich">
                <ul>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Chips</a>
                    </Link>
                  </li>
                  <ul>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">Beer</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">
                          Non veg
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">
                        Home Accessories
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Home</a>
                    </Link>
                  </li>
                  <ul>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">Beer</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">
                          Milk Packet
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Chips</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Milk</a>
                    </Link>
                  </li>

                  <ul>
                    <li>
                      <Link href="/ProductList/ProductList">
                        <a className="dropdown-item font-weight-bolder">
                          Stationery
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <li>
                    <Link href="/ProductList/ProductList">
                      <a className="dropdown-item font-weight-bolder">Beer</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </PublicLayout>
    </>
  );
};

export default Sitemap;
