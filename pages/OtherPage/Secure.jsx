import React from "react";
import PublicLayout from "../Layout/PublicLayout";
const breadcrumbsData = [
  {
    label: <i className="fa fa-home" aria-hidden="true"></i>,
    path: "/",
  },
  {
    label: "Secure Payment",
    path: "",
  },
];
const Secure = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Shop">
        <div className="container">
          <div className="authenHeading contactTitle">
            <h3 className="authenText">Secure Payment</h3>
          </div>
          <h4>Secures Payment</h4>
          <p className="text-muted">
            As part of a secure payment, your credit card number, expiry date
            and cryptogram are encrypted in the transmission to protect you and
            ensure that no data flows in the clear via the internet.
          </p>
          <h5>Our secure payment</h5>
          <p className="text-muted">With SSL</p>
          <h5>Using Visa/Mastercard/Paypal</h5>
          <p className="text-muted">About this service</p>
        </div>
      </PublicLayout>
    </>
  );
};
export default Secure;
