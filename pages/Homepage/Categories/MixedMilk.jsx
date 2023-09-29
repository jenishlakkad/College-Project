import React from "react";
import Slider from "react-slick";
import mixedMilk from "../../../data/mixedMilk.json";
import SingleProduct from "../../../componet/Products/Product/SingleProduct/SingleProduct";
import { Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../_app";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1410,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 449,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const MixedMilk = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (id) => {
    const newProduct = mixedMilk?.find((pd) => pd.id === id);
    setCart([...cart, { ...newProduct, quantity: 1 }]);
  };
  return (
    <>
      <Slider {...settings} className="row slick-margin productslieder">
        {mixedMilk.map((product, index) => (
          <Col xl={12} key={index} className="slick-col">
            <SingleProduct
               addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
               key={product.id}
               product={product}
               name={product.name}
               price={product.price}
               oldPrice={product.oldPrice}
               onAddToWish={(id) => console.log(id)}
               onAddToCart={handleAddToCart}
            />
          </Col>
        ))}
      </Slider>
    </>
  );
};

export default MixedMilk;
