import productData from "../../../data/product.json";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { CartContext } from "../../../pages/_app";
import { Row, Col, Button, Tabs, Tab } from "react-bootstrap";
import Profile1 from "../../../public/assets/profile1.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  Carrier,
  Facebook,
  Instagram,
  Parcel,
  Pinterest,
  Security,
  Twitter,
} from "../../../styles/Svg";
import Countdown from "../../../pages/Homepage/Categories/Countdown";
import ReactStars from "react-stars";
import MilkPacket from "../../../pages/Homepage/Categories/MilkPacket";
export const ProductDetails = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const products = [...productData];
  const [product, setProduct] = useState(null);
  const [addedInCart, setAddedInCart] = useState(false);
  useEffect(() => {
    if (router.query.id) {
      const data = products.find((pd) => pd.id === router.query.id);
      setProduct(data);
    }
  }, [router.query.id]);
  useEffect(() => {
    if (product) {
      setAddedInCart(Boolean(cart?.find((pd) => pd.id === product.id)));
    }
  }, [product, cart]);
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState(2);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const handleAddToCart = () => {
    const newProduct = { ...product, quantity: quantity };
    setCart([...cart, newProduct]);
  };
  if (!product) return <></>;
  return (
    <>
      <div className="container productDetails">
        <div>
          <div>
            <Row>
              <Col lg={5} md={6}>
                <div id="content">
                  <div className="product-border">
                    <Slider
                      fade={true}
                      asNavFor={nav2}
                      arrows={false}
                      lazyLoad={true}
                      ref={(slider1) => setNav1(slider1)}
                    >
                      {product.imageGallery.map((img, index) => (
                        <div key={index}>
                          <div className="productsType">
                            {product.isSale && (
                              <span className="productsSale">sale</span>
                            )}
                            {product.isNew && (
                              <span className="productsNew">new</span>
                            )}
                          </div>
                          <img
                            src={img}
                            alt="product"
                            className="img-fluid mx-auto"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>

                  <div>
                    <Slider
                      arrows={false}
                      asNavFor={nav1}
                      ref={(slider2) => setNav2(slider2)}
                      slidesToShow={4}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      autoplay={false}
                      autoplaySpeed={1500}
                      infinite={true}
                      speed={500}
                      className="row slick-margin"
                    >
                      {product.imageGallery.map((img, index) => (
                        <Col xl={12} className="slick-col">
                          <div key={index}>
                            <img
                              src={img}
                              alt="product"
                              className="img-fluid mx-auto secondProcudtSlider"
                            />
                          </div>
                        </Col>
                      ))}
                    </Slider>
                  </div>
                </div>
              </Col>
              <Col lg={7} md={6}>
                <div className="propage">
                  <h2>{product.name}</h2>
                  <div className="product-prices">
                    <div className="product-discount">
                      <span className="regular-price">{product.oldPrice}</span>
                    </div>
                    <div className="current-price">
                      <span className="price">{product.price}</span>
                      <span class="discount discount-percentage ">
                        {product.save}
                      </span>
                    </div>
                  </div>
                  <ReactStars
                    count={5}
                    size={24}
                    color2={"#FBB50A"}
                    className="marg-bot-15"
                  />
                  <Countdown />

                  <hr />
                  <div className="product-information">
                    <div id="product-description-short-2" className="prodes">
                      <p>{product.description}</p>
                    </div>
                    <hr />
                    <div className="sizepro marg-bot-15">
                      <div className="product-actions ">
                        <div>
                          <label for="cars">Size:</label>
                          <select name="cars" id="cars">
                            <option value="L">L</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="xl">XL</option>
                          </select>
                        </div>
                      </div>
                      <div className="productQuantity">
                        <span className="productQuantityTitle">Quantity:</span>
                        <div className="mainCount">
                          <div className="count">
                            <span
                              onClick={() => {
                                if (quantity > 1) {
                                  setQuantity(quantity - 1);
                                }
                              }}
                              className="counter"
                            >
                              <i className="fa fa-minus" aria-hidden="true"></i>
                            </span>
                            <input
                              type="text"
                              className="countInput"
                              disabled
                              value={quantity}
                            />
                            <span
                              onClick={() => setQuantity(quantity + 1)}
                              className="counter"
                            >
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-additional-info">
                      <div className="productBtn d-inline-block">
                        <Link href="/ComWish/Compare">
                          <a>
                            <Button className="productIcon">compare</Button>
                          </a>
                        </Link>
                      </div>
                      <div className="productBtn d-inline-block">
                        <Link href="/ComWish/Wishlist">
                          <a>
                            <Button className="productIcon">wishlist</Button>
                          </a>
                        </Link>
                      </div>
                      <div className="productBtn d-inline-block">
                        <Button
                          disabled={addedInCart}
                          onClick={() => handleAddToCart()}
                          className="productIcon"
                        >
                          Add To Cart
                        </Button>
                      </div>
                      <hr />
                      <div>
                        <div className="productColor">
                          <span>Color:</span>
                          <ul className="list-unstyled">
                            {product?.colors.map((color, index) => (
                              <li
                                onClick={() => setActiveColor(index)}
                                className={
                                  activeColor === index ? "active" : ""
                                }
                                key={index}
                                style={{ backgroundColor: color }}
                              ></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="socialIcon">
                        <div className="button-group">
                          
                          <Twitter />
                          <Facebook />
                          <Pinterest />
                          <Instagram />
                        </div>
                      </div>
                      <hr />
                      <div className="blockreassurance_product">
                        <div>
                          <span className="item-product">
                            <Security />
                            <span class="block-title">Security policy</span>
                            <p>(edit with the Customer Reassurance module)</p>
                          </span>
                        </div>
                        <div>
                          <span className="item-product">
                            <Parcel />
                            <span class="block-title">Security policy</span>
                            <p>(edit with the Customer Reassurance module)</p>
                          </span>
                        </div>
                        <div>
                          <span className="item-product">
                            <Carrier />
                            <span class="block-title">Security policy</span>
                            <p>(edit with the Customer Reassurance module)</p>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* <Lock/> */}
                  </div>
                </div>
              </Col>
            </Row>
            <div className="product-tab">
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className=""
              >
                <Tab eventKey="home" title="Description">
                  <div className="p-15 productSummary">
                    <p>{product.content}</p>
                    <p>{product.description}</p>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Details">
                  <div className="p-15 ">
                    <Image src={Profile1} alt="profile" className="mx-auto img-fluid"/>
                    <hr />
                    <span className="fw-bolder"> Availability : </span>
                    {product.isStocked ? (
                      <span className="product-stock">in stock</span>
                    ) : (
                      "out stock"
                    )}
                    <p>Specific References</p>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <h2 class="heading headingSpacing">
          <span>Featured Products</span>
        </h2>
        <MilkPacket />
      </div>
    </>
  );
};
export default ProductDetails;
