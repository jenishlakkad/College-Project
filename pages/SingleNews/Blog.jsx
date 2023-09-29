import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import DataNews from "../../data/DataNews";
import Link from "next/link";
import PublicLayout from "../Layout/PublicLayout";
const breadcrumbsData = [
    {
      label: <i className="fa fa-home" aria-hidden="true"></i>,
      path: "/",
    },
    {
      label: "Blog",
      path: "",
    },
  ];
const Blog = () => {
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="News">
        <div className="container">
          <Row>
            {DataNews.map((elm, index) => (
              <Col xl={4} key={index} id="blog">
                <div className="blog_post_content">
                  <div className="blog_post_content_top">
                    <div className="post_thumbnail">
                      <Image src={elm.image} alt="banner1" />
                      {/* <img src="https://dummyimage.com/509x300/" /> */}
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
          </Row>
        </div>
      </PublicLayout>
    </>
  );
};

export default Blog;
