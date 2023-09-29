import React from "react";
import Cart from "../componet/Cart/Cart";
import PublicLayout from "./Layout/PublicLayout";
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
const CartPage = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="CartPage">
        <Cart />
      </PublicLayout>
    </>
  );
};

export default CartPage;
