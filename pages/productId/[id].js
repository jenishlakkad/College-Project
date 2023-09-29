import React from "react";
import Productdetails from "../../componet/Products/ProductDetails/productdetails";
import Layout from "../Layout/Layout";
import PublicLayout from "../Layout/PublicLayout";
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
const ProductDetailPage = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Shop">
        <Productdetails />
      </PublicLayout>
    </>
  );
};

export default ProductDetailPage;
