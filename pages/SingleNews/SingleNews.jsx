import PublicLayout from "../Layout/PublicLayout";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import blog from "../../public/assets/Blog/1.jpg";
import Image from "next/image";
import { Form } from "react-bootstrap";
import Link from "next/link";
const breadcrumbsData = [
  {
    label: <i className="fa fa-home" aria-hidden="true"></i>,
    path: "/",
  },
  {
    label: "blog",
    path: "/SingleNews/Blog",
  },
  {
    label: "Single News",
    path: "",
  },
];
const SingleNews = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="News">
        <div className="container">
          <div className="singleBlog">
            <Row className="">
              <Col xl={7} lg={7} md={6}>
                <Card>
                  <Image
                    src={blog}
                    alt="Content"
                    className="img-fluid mx-auto"
                  />
                  <Card.Body>
                    <div className="blog_subtitle">
                      <span className="f-bolder pr-2">
                        <i className="far fa-calendar-alt mr-2"></i>Oct 27 2020
                      </span>
                      <span className="f-bolder border-secondary border-left border-right px-2">
                        <i className="far fa-comments mr-2"></i>0 comments
                      </span>
                      <span className="f-bolder px-2">
                        <i className="fas fa-user mr-2"></i>author
                      </span>
                    </div>
                    <Card.Title>
                      <h2 className="card-title">
                        <a href="#">
                          Donec ac elit id metus auctor imperdiet vitae quis
                          erat.
                        </a>
                      </h2>
                    </Card.Title>
                    <Card.Text className="text-muted f_13">
                      In eros dolor, pharetra non sem non, feugiat sagittis
                      tellus. Suspendisse malesuada dolor vel risus pulvinar, in
                      ornare nulla mattis. Phasellus turpis orci, bibendum eget
                      tellus at, commodo aliquet arcu. Sed at luctus elit. Nam
                      fermentum bibendum mi non hendrerit. Duis in accumsan sem.
                      Etiam eget orci urna. Cras nisi nunc, laoreet sed justo
                      nec, maximus tincidunt lectus. Praesent vel pharetra leo.
                      Duis et justo orci. Maecenas malesuada congue ex sed
                      molestie. Aenean eu magna vel ex feugiat porta.
                      Pellentesque ac mollis eros. Praesent varius orci eu
                      dapibus vestibulum.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={5} lg={5} md={6} sm={12} className="border_l">
                <div className="s_b_comment blogSticky">
                  <div className="authenHeading">
                    <h3 className="authenText">Log in to your account </h3>
                  </div>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Website Url</Form.Label>
                        <Form.Control required type="email" />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Subject</Form.Label>
                        <Form.Control required type="email" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Row>
                    <div className="footerInput">
                      <button type="submit" className="mb-1 main-button">
                        <a>Post Comment</a>
                      </button>
                    </div>
                    {/* <Button className="btn btn-primary font-weight-bolder f_13 px-3 py-2 " >d</Button> */}
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </PublicLayout>
    </>
  );
};

export default SingleNews;
