import React from "react";
import Slider from "react-slick";
import { Col } from "react-bootstrap";
import ReactStars from "react-stars";
import Image from "next/image";
import DataReview from "../../../data/DataReview";
import { Quote } from "../../../styles/Svg";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const Review = () => {
  return (
    <>
      <div className="bg-light review cate-bg">
        <div className="container ">
          <h2 className="heading headingSpacing">
            <span>Customer Review</span>
          </h2>
          <Slider {...settings} className="row">
            {DataReview.map((elm, index) => (
              <Col key={index}>
                <div className="main-testi">
                  <div className="auth">
                    <div className="timg center-block ">
                      <Image src={elm.image} alt="Review" />
                    </div>
                    <div className="auth-name ">
                      <div className="">
                        <h4>{elm.name}</h4>
                        <h5>{elm.profession}</h5>
                      </div>
                      <div className="">
                        <Quote />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="text-p">
                    <p>{elm.detail}</p>
                    <ReactStars count={5} size={24} color2={"#fbb50a"} />
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

export default Review;
