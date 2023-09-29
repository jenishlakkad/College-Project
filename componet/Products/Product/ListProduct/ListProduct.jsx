import Link from "next/link";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { CartContext } from "../../../../pages/_app";
import { useState } from "react";
import { useContext } from "react";
import ReactStars from "react-stars";
import { Eye, Heart, Check  } from "../../../../styles/Svg";
import Slider from "react-slick";

const ListProduct = ({ product, addedInCart, onAddToCart }) => {
  const { name, review, subName, oldPrice, price, image, isSale, isNew, id } =
    product;
  const [modalShow, setModalShow] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [wish, setWish] = useState(false);

  const total = cart.reduce(
    (total, pdtitem) =>
      total + Number(pdtitem.price) * Number(pdtitem.quantity),
    0
  );
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const handleAddToCart = () => {
    const newProduct = { ...product, quantity: quantity };
    setCart([...cart, newProduct]);
  };
  return (
    <>
      <div id="js-product-list">
        <div className="products product-thumbs row wb-product-list">
          <Col xl={3} lg={4} md={4} sm={5} className="col-m-tb-15">
            <div className="cardDesign">
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
          </Col>
          <Col xl={9} lg={8} md={8} sm={7} className="col-m-tb-15">
            <div className="">
              <div className="product-title">{name}</div>
              <div className="d-flex product-list-reviews">
                <div className="prodReview">{review} review</div>
                <ReactStars count={5} size={22} color2={"#fbb50a"} />
              </div>
              <hr />
              <div id="category-description" className="text-muted">
                <p>{product.description}</p>
              </div>
              <hr />
              <span className="prodPrice ">
                <span className="price">${price}</span>
                <del className="oldPrice">{oldPrice}</del>
              </span>
              <div className="button-group">
                <div className="list-abs-button mtop-10">
                  <div
                    className="d-inline-block"
                    onClick={() => setModalShow(true)}
                  >
                    <Eye />
                  </div>
                  <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                className="eyeModal"
                centered
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <div>
                    <Row className="row-center">
                      <Col lg={4} md={4}>
                        <div className="eyeProImg">
                          <Slider
                            dots={true}
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
                          <div>
                            <Slider
                              arrows={false}
                              asNavFor={nav1}
                              ref={(slider2) => setNav2(slider2)}
                              slidesToShow={3}
                              swipeToSlide={true}
                              focusOnSelect={true}
                              autoplay={false}
                              autoplaySpeed={1500}
                              infinite={true}
                              speed={500}
                            >
                              {product.imageGallery.map((img, index) => (
                                <div key={index}>
                                  <img
                                    src={img}
                                    alt="product"
                                    className="img-fluid mx-auto secondProcudtSlider"
                                  />
                                </div>
                              ))}
                            </Slider>
                          </div>
                        </div>
                      </Col>
                      <Col lg={8} md={8}>
                        <a href={`/product/${id}`} className="product-title">
                          {name}
                        </a>
                        <div className="propage">
                          <div className="product-discount">
                            <span className="regular-price">{oldPrice}</span>
                          </div>
                          <div className="current-price">
                            <span className="price">${price}</span>
                            {/* <span class="discount discount-percentage ">
                              {save}
                            </span> */}
                          </div>
                        </div>
                        <hr />
                        <div className="product-information">
                          <div
                            id="product-description-short-2"
                            className="prodes"
                          >
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
                              <span className="productQuantityTitle">
                                Quantity:
                              </span>
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
                                    <i
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                    ></i>
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
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-additional-info">
                            <div className="productBtn d-inline-block">
                              <Button className="productIcon">
                                <Link href="/ComWish/Compare">
                                  <a>compare</a>
                                </Link>
                              </Button>
                            </div>
                            <div className="productBtn d-inline-block">
                              <Button className="productIcon">
                                <Link href="/ComWish/Wishlist">
                                  <a>wishlist</a>
                                </Link>
                              </Button>
                            </div>
                            <div className="productBtn d-inline-block">
                              <Button
                                disabled={addedInCart}
                                onClick={() => onAddToCart(id)}
                                className="productIcon"
                              >
                                Add To Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                        {/* ----------------------------------------------- */}
                      </Col>
                    </Row>
                  </div>
                </Modal.Body>
              </Modal>

                  <div
                    className="d-inline-block"
                    onClick={() => setWish(true)}
                  >
                    <Heart />
                  </div>
                  <Modal
                show={wish}
                onHide={() => setWish(false)}
                size="lg"
                centered
                aria-labelledby="contained-modal-title-vcenter"
                className="fav-model compareModal"
              >
                <Modal.Body>
                  <Modal.Header closeButton></Modal.Header>
                  <div className="text-center  model-pd">
                    <p className="model-svg">
                      <Check />
                    </p>
                    <p className="m-mainText">
                    Wishlist updated!
                    </p>
                    <p className="m-title">
                      You Must Be Logged In To Manage Your Wishlist.
                    </p>
                    <div className="m-link">
                      <Link href="/ComWish/Wishlist">
                        <a> Go To Wishlist</a>
                      </Link>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
                </div>

                <div className="d-flex mtop-10">
                  <Button
                    className="add-to-cart cartb"
                    disabled={addedInCart}
                    onClick={() => onAddToCart(id)}
                  >
                    Add to cart
                  </Button>
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
            </div>
          </Col>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
