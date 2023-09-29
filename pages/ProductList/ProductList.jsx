import React from "react";
import { Col, Row } from "react-bootstrap";
import PublicLayout from "../Layout/PublicLayout";
import AllProduct from "./AllProduct";
import Filter from "./Filter";
const breadcrumbsData = [
  {
    label: <i className="fa fa-home" aria-hidden="true"></i>,
    path: "/",
  },
  {
    label: "Shop",
    path: "/Shop",
  },
];
const ProductList = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Shop">
        <div className="container">
          <Row>
            <Col xl={3} lg={3}>
              <Filter />
            </Col>
            <Col xl={9} lg={9}>
              <AllProduct />
            </Col>
          </Row>
        </div>
      </PublicLayout>
    </>
  );
};

export default ProductList;
