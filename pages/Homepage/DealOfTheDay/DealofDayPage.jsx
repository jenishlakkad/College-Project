import React from "react";
import { useContext } from "react";
import Slider from "react-slick";
import { CartContext } from "../../_app";
import products from "../../../data/product.json";
import { Row, Col } from "react-bootstrap";
import DealDay from "../../../componet/Products/Product/SingleProduct/DealDay";
import offerbanner1 from "../../../public/assets/offerbanner-1.jpg";
import Image from "next/image";
import Link from "next/link";
var settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  draggable: true,
  touchThreshold: 100,
  arrows: true,
};
const DealofDayPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const handleAddToCart = (id) => {
    const newProduct = products?.find((pd) => pd.id === id);
    setCart([...cart, { ...newProduct, quantity: 1 }]);
  };
  return (
    <>
      <div className="bg-light cate-bg dealofDay">
        <div className="container">
          <Row className="slick-margin">
            <Col xl={5} lg={5} md={12} sm={12} xs={12} className="sp-banner slick-col">
              <div className="posi-relative">
                <Image src={offerbanner1} alt="banner1" />
                <div className="img-dsc-offer">
                  <div className="off-bannerdes">
                    <h4>Buy one Get one Free</h4>
                    <h2>Tasty Noodles And Fast Food Container Collection</h2>
                    <div className="DealofDayPage">
                      <p className="">
                        <Link href="/ProductList/ProductList">
                          <a href="#">
                            <span>Shop Products</span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={7} lg={7} md={12} sm={12} xs={12} className="sp-bannerright slick-col">
              <h2 className="heading headingSpacing">
                <span>Deal Of The Day</span>
              </h2>
              <div className="slick-margin">
                <Slider {...settings} className="">
                  {products.map((product, index) => (
                    <DealDay
                      addedInCart={Boolean(
                        cart?.find((pd) => pd.id === product.id)
                      )}
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default DealofDayPage;
