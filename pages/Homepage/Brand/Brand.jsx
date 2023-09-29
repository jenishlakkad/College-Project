import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import DataBrand from "../../../data/DataBrand";
const settings = {
  autoplay: true,
  autoplaySpeed: 1500,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrow: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
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
const Brand = () => {
  return (
    <>
      <div className="container deal_of_container ">
        <div className="brandLogo">
          <Slider {...settings}>
          {DataBrand.map((elm,index) => (
            <div  key={index}>
              <Image
                className="img-fluid mx-auto"
                src={elm.image}
                alt="BrandLogo"
              />
            </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Brand;
