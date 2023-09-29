import React from "react";
import PublicLayout from "../Layout/PublicLayout";
import compare1 from "../../public/assets/Product/New/4.jpg";
import Image from "next/image";
import Link from "next/link";
const breadcrumbsData = [
  {
    label: <i className="fa fa-home" aria-hidden="true"></i>,
    path: "/",
  },
  {
    label: "Compare",
    path: "#",
  },
];
const Compare = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Compare">
        <div className="table-responsive container">
          <table className="table">
            <tbody id="table-compare">
              <tr>
                <th className="product-name">Product Name</th>
                <td>Fresh Lemon </td>
              </tr>
              <tr>
                <th className="product-name">Product Image</th>
                <td>
                  <div>
                    <Image
                      src={compare1}
                      className="fst-image d-block img-fluid"
                      alt="compare1"
                    />
                  </div>
                  <div className="font-weight-bold f_15">
                    <span>best price : </span>$130.50
                  </div>
                </td>
              </tr>
              <tr>
                <th className="product-name">Product Description</th>
                <td>
                  <p className="description-compare f_13 mb-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distrib...
                  </p>
                </td>
              </tr>
              <tr>
                <th className="product-name"> Availability </th>
                <td>
                  <p className="mb-0"> In stock </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="compareConShopping">
            <Link href="/ProductList/ProductList">
              <a>Continue Shopping</a>
            </Link>
          </p>
        </div>
      </PublicLayout>
    </>
  );
};

export default Compare;
