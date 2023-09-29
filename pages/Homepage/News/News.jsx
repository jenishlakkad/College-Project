import Image from "next/image";
import Slider from "react-slick";
import { Col } from "react-bootstrap";
import DataNews from "../../../data/DataNews";
import Link from "next/link";
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
      breakpoint: 670,
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
const News = () => {
  return (
    <>
      <div className="container">
        <h2 className="heading headingSpacing">
          <span>News</span>
        </h2>
        <Slider {...settings} className="row slick-margin">
          {DataNews.map((elm, index) => (
            <Col xl={4} className="slick-col" key={index}>
              <div className="blog_post_content">
                <div className="blog_post_content_top">
                  <div className="post_thumbnail">
                    <Image src={elm.image} alt="banner1" />
                    <div className="blog_mask content">
                      <div className="blog_mask_content">
                        <Link href="/SingleNews/SingleNews" passHref>
                          <div className="thumbnail_lightbox icon">
                            <i className="fa fa-random"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="blogdt">
                      <span className="d-inline-block">
                        <span className="b-date">{elm.date}</span>
                        <span className="b-month">{elm.month}</span>
                      </span>
                    </div>
                  </div>
                  <div className="blog_post_content_bottom text-xs-left">
                    <span className="blog-au">{elm.subtitle}</span>
                    <h3 className="post_title">
                      <Link href="/SingleNews/Blog">
                        <a tabIndex="0">{elm.title}</a>
                      </Link>
                    </h3>
                    <div className="post_content">
                      <p>{elm.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default News;
