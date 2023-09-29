import React from "react";
import PublicLayout from "../Layout/PublicLayout";
const breadcrumbsData = [
  {
    label: <i className="fa fa-home" aria-hidden="true"></i>,
    path: "/",
  },
  {
    label: "Legal Notice",
    path: "",
  },
];
const Legal = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Shop">
        <div className="container">
          <div className="authenHeading contactTitle">
            <h3 className="authenText">Legal Notice</h3>
          </div>
          <h4>Legal</h4>
          <h5>Credits</h5>
          <br />
          <p className="text-muted">Concept and production:</p>
          <p className="text-muted">
            Is legal notice serious? Legal notice has got a very important role
            to play in legal matters and hence this shall never be taken easily
            nor one shall avoid its acceptance as no purpose is served negating
            the acceptance and infact non-acceptance only gives the point to
            other party stating the bad intention about You.
          </p>
        </div>
      </PublicLayout>
    </>
  );
};
export default Legal;
