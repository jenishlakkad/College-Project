import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../../pages/_app";
import Link from "next/link";
import ReactStars from "react-stars";
import Countdown from "../../../../pages/Homepage/Categories/Countdown";
const DealDay = ({ product }) => {
  const {
    name,
    review,
    content,
    subName,
    oldPrice,
    price,
    image,
    isSale,
    isNew,
    id,
  } = product;
  const [modalShow, setModalShow] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const total = cart.reduce(
    (total, pdtitem) =>
      total + Number(pdtitem.price) * Number(pdtitem.quantity),
    0
  );
  return (
    <>
      <div className="slick-col">
        <div className="thumbnail-container reviews-loading">
          <div className="thumbrel row">
            <Col xl={5} lg={5} md={5} sm={5}>
              <div className="wb-image-block ">
                <div className="">
                  {isSale && <span className="productsSale">sale</span>}
                  {isNew && <span className="productsNew">new</span>}
                  <div className="pro_image">
                    <Link href={`/productId/${id}`}>
                      <a>
                        <img
                          src={image}
                          className="js-img img-fluid mx-auto"
                          alt="SingleProduct"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={7} lg={7} md={7} sm={7}>
              <div className="productDetail">
                <div className="productmcat">{subName}Standardized-milk</div>
                <h3 className="h3 product-title">{name}</h3>
                <div className="d-flex product-list-reviews">
                  <div className="prodReview">{review} review</div>
                  <ReactStars count={5} size={18} color2={"#fbb50a"} />
                </div>
                <p className="text-mute">{content}</p>
                <span className="prodPrice">
                  <span className="price">${price}</span>
                  <del className="oldPrice">{oldPrice}</del>
                </span>
                <hr />
                <span className="counterDealText"> Offer ends in </span> <Countdown />
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealDay;
