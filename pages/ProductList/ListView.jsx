import React, { Component, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { CartContext } from "../_app";
import products from "../../data/product.json";
import ListProduct from "../../componet/Products/Product/ListProduct/ListProduct";
const ListView = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (id) => {
    const newProduct = products?.find((pd) => pd.id === id);
    setCart([...cart, { ...newProduct, quantity: 1 }]);
  };
  return (
    <>
    <Row>
        {products.map((product,index) => (
          <Col xl={12} md={12} xs={12} key={index}>
          <ListProduct
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
      </Row>
    </>
  );
};

export default ListView;

