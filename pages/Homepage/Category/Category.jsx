import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import DataCategory from "../../../data/DataCategory";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
const Category = () => {
  return (
    <>
      <div className="container">
        <h2 className="heading headingSpacing text-xs-left">
          <span>Our Category</span>
        </h2>
        <div className="propaddingcat-pa text-center">
          <Slider {...settings} className="row slick-margin">
            {DataCategory.map((elm, index) => (
              <Col xl={2} className="slick-col" key={index}>
                <div className="item cursor-pointer">
                  <Link href="/ProductList/ProductList">
                    <a>
                      <Image src={elm.image} alt="Category" />
                    </a>
                  </Link>
                  <div className="content-cate">
                    <h2 className="categoryName">
                      <span>
                        <Link href="/ProductList/ProductList">
                          <a title="Beer" tabIndex="0">
                            {elm.catitle}
                          </a>
                        </Link>
                      </span>
                    </h2>
                    <div className="catecount hidden-sm-down">
                      <h5 className="cate-it">{elm.item}</h5>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Category;
