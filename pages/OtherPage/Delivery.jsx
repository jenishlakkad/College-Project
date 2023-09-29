import React from "react";
import PublicLayout from "../Layout/PublicLayout";
const breadcrumbsData = [
  {
    label: <i className="fa fa-home" aria-hidden="true"></i>,
    path: "/",
  },
  {
    label: "Delivery",
    path: "",
  },
];
const Delivery = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Shop">
        <div className="container">
          <div className="authenHeading contactTitle">
            <h3 className="authenText">Delivery</h3>
          </div>
          <h4>Shipments and Returns</h4>
          <h5>Your pack shipment</h5>
          <br />
          <p className="text-muted">
            Packages are generally dispatched within 2 days after receipt of
            payment and are shipped via UPS with tracking and drop-off without
            signature. If you prefer delivery by UPS Extra with required
            signature, an additional cost will be applied, so please contact us
            before choosing this method. Whichever shipment choice you make, we
            will provide you with a link to track your package online.
          </p>
          <p className="text-muted">
            hipping fees include handling and packing fees as well as postage
            costs. Handling fees are fixed, whereas transport fees vary
            according to total weight of the shipment. We advise you to group
            your items in one order. We cannot group two distinct orders placed
            separately, and shipping fees will apply to each of them. Your
            package will be dispatched at your own risk, but special care is
            taken to protect fragile objects.
          </p>
          <p className="text-muted">
            Boxes are amply sized and your items are well-protected.
          </p>
        </div>
      </PublicLayout>
    </>
  );
};
export default Delivery;
