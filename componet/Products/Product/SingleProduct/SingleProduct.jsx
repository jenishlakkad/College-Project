import { useState } from "react";
import Link from "next/link";
import ReactStars from "react-stars";
import { Check, Eye, Heart, PCompare } from "../../../../styles/Svg";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../../../pages/_app";
import Slider from "react-slick";
export const SingleProduct = ({ product, addedInCart, onAddToCart }) => {
  const { name, review, save, oldPrice, price, image, isSale, isNew, id } =
    product;
  const [modalShow, setModalShow] = useState(false);
  const [wish, setWish] = useState(false);
  const [compare, setCompare] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addCart, setAddCart] = useState(false);
  const [activeColor, setActiveColor] = useState(2);

  const { cart, setCart } = useContext(CartContext);
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
          <div className="button-group">
            <div className="abs-button">
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

              <div className="d-inline-block" onClick={() => setWish(true)}>
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
                    <p className="m-mainText">Wishlist updated!</p>
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
              <div className="d-inline-block" onClick={() => setCompare(true)}>
                <PCompare />
              </div>
              <Modal
                show={compare}
                onHide={() => setCompare(false)}
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
                    <p className="m-mainText">Compare list updated!</p>
                    <p className="m-title">
                      You Must Be Logged In To Manage Your Compare.
                    </p>
                    <div className="m-link">
                      <Link href="/ComWish/Compare">
                        <a> Go To Compare</a>
                      </Link>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>

            <div className="center-button hoverbtn">
              <Button
                className="add-to-cart cartb"
                disabled={addedInCart}
                onClick={() => {
                  onAddToCart(id);
                  setAddCart(true);
                }}
              >
                Add to Cart
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
              <Modal
                show={addCart}
                onHide={() => setAddCart(false)}
                size="lg"
                centered
                aria-labelledby="contained-modal-title-vcenter"
                className="fav-model addcartModal"
              >
                <Modal.Body>
                  <div>
                    <Row className="row-center">
                      <p>Product successfully added to your shopping cart</p>
                      <Col lg={3} md={4}>
                        <div className="addcartImg">
                          <div>
                            <img
                              src={image}
                              alt="product"
                              className="img-fluid mx-auto "
                            />
                          </div>
                        </div>
                      </Col>
                      <Col lg={9} md={8}>
                        <a href={`/product/${id}`} className="product-title">
                          {name}
                        </a>
                        <div className="product-prices propage">
                          <div className="product-discount">
                            <span className="regular-price">{oldPrice}</span>
                          </div>
                          <div className="current-price">
                            <span className="price">${price}</span>
                            <span class="discount discount-percentage ">
                              {save}
                            </span>
                          </div>
                        </div>
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
                        {/* ----------------------------------------------- */}
                      </Col>
                      <hr />
                      <p className="addcartModalCalcu">
                        There Are <span>{cart.length ?? "0"}</span> Items In
                        Your Cart.
                      </p>
                      <div className="totalOfAddCartModal">
                        <ul className="list-unstyled">
                          <li>
                            <h6>Total products:</h6>
                            <span> ${price} </span>
                          </li>
                          <li>
                            <h6>Total Shipping:</h6>
                            <span> $0.00 </span>
                          </li>
                          <li>
                            <h6>Total Taxes:</h6>
                            <span> $0.00 </span>
                          </li>
                          <li>
                            <h6>Total:</h6>
                            <span> ${price} </span>
                          </li>
                        </ul>
                      </div>

                      <div className="product-additional-info cart-content-btn">
                        <div className="productBtn d-inline-block">
                          <Link href="/ProductList/ProductList">
                            <a>
                              <Button className="productIcon">Continue</Button>
                            </a>
                          </Link>
                        </div>
                        &nbsp;&nbsp;
                        <div className="productBtn d-inline-block">
                          <Link href="/cart">
                            <a>
                              <Button className="productIcon">
                                Add To Cart
                              </Button>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Row>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="productDetail">
            <div className="product-title">{name}</div>
            <div className="product-list-reviews">
              <div className="prodReview">{review} review</div>
              <ReactStars count={5} size={18} color2={"#ffd700"} />
            </div>
            <span className="prodPrice">
              <span className="price">${price}</span>
              <del className="oldPrice">{oldPrice}</del>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
