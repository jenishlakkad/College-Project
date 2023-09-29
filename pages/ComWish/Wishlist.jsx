import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Login from "../Authentication/Login";
import WishListData from "../../data/WishListData";
import PublicLayout from "../Layout/PublicLayout";
const breadcrumbsData = [
  {
    label: <i className="fa fa-home" aria-hidden="true"></i>,
    path: "/",
  },
  {
    label: "Wishlist",
    path: "#",
  },
];
const Wishlist = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Wishlist">
        <div className="container wishlist">
          {WishListData.map((elm, index) => (
            <div className=" row " key={index}>
              <Col xs={12} md={6} lg={6}>
                <div className="d-flex row ">
                  <Col xl={4} xs={4} md={5} lg={5} className="px-0">
                    <Image
                      src={elm.image}
                      className="img-fuild mx-auto"
                      alt="wishlist"
                    />
                  </Col>
                  <Col xl={8} xs={8} md={7} lg={7}>
                    <h5 className="w_product_name">
                      <a className="common">
                        {elm.title}
                      </a>
                    </h5>
                    <ul className="p-0">
                      <li className="my-1 f_13 list-unstyled">
                        <span>size: </span>
                        <span>{elm.size}</span>
                      </li>
                      <li className="f_13 list-unstyled">
                        <span>color:</span>
                        <span>{elm.color}</span>
                      </li>
                    </ul>
                  </Col>
                </div>
              </Col>
              <Col md={6} lg={6} className=" ">
                <div>
                  <Row>
                    <Col lg={4} xs={4} className="prodPrice">
                      <span className="price"> {elm.price}</span>
                      <del className="oldPrice"> {elm.old}</del>
                    </Col>
                    <Col lg={4} xs={4}>
                      <span className="er stock">
                        <span className="d-xl-inline-block d-none">
                          availability :
                        </span>
                        {elm.avaibility}
                      </span>
                    </Col>
                    <Col lg={4} xs={4} className="text-end">
                      <Link href="#">
                        <a>
                          <i className="fas fa-trash-alt "></i>
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
              <hr />
            </div>
          ))}
        </div>
      </PublicLayout>
    </>
  );
};

export default Wishlist;
