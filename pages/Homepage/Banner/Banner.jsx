import Image from "next/image";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import slider1 from "../../../public/assets/slider-1.jpg";
import slider2 from "../../../public/assets/slider-2.jpg";
import leftbanner1 from "../../../public/assets/leftbanner-1.jpg";
import leftbanner2 from "../../../public/assets/leftbanner-2.jpg";
import Link from "next/link";

var settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  draggable: true,
  touchThreshold: 100,
  arrows: false,
};
const Banner = () => {
  return (
    <>
      <div className="slider-part">
        <Row>
          <Col xl={8} lg={12} md={12} sm={12} className="s-panel">
            <Slider {...settings}>
              <div className="homepageBanner">
                <Image src={slider1} alt="banner1" />
                <div className="slidedes">
                  <h3>Daily And Mega Offers</h3>
                  <h2>Different Brands Coffee And Tea Packets</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley...
                  </p>
                  <span className="slidehref">
                  <Link href="/ProductList/ProductList">
                    <a className="btn btn-primary">shop now</a>
                    </Link>
                  </span>
                </div>
              </div>
              <div className="homepageBanner">
                <Image src={slider2} alt="banner2" />
                <div className="slidedes">
                  <h3>Daily And Mega Offers</h3>
                  <h2>Different Brands Coffee And Tea Packets</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley...
                  </p>
                  <span className="slidehref">
                    <Link href="/ProductList/ProductList">
                    <a className="btn btn-primary">shop now</a>
                    </Link>
                  </span>
                </div>
              </div>
            </Slider>
          </Col>
          <Col xl={4}  className="right-slider-banner">
            <div className="leftbanner">
              <div className="right-banner">
                <Image src={leftbanner2} alt="banner1" />
                <div className="img-dsc">
                  <h4>20% off on All Items</h4>
                  <h2>Bear Collection</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and rest
                    typesetting.
                  </p>
                  <Link href="/ProductList/ProductList">
                  <a className="btn bannerWhiteBtn">Shop Now</a>
                  </Link>
                </div>
              </div>
              <div className="right-banner">
                <Image src={leftbanner1} alt="banner1" />
                <div className="img-dsc">
                  <h4>20% off on All Items</h4>
                  <h2>Noodles Can</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and rest
                    typesetting.
                  </p>
                  <Link href="/ProductList/ProductList">
                  <a
                    className="btn bannerWhiteBtn"
                  >
                    Shop Now  
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Banner;
