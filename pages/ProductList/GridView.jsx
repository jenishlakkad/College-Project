import React, { useContext } from "react";
import { Row,Col } from 'react-bootstrap'
import { CartContext } from "../_app";
import products from "../../data/product.json";
import SingleProduct from "../../componet/Products/Product/SingleProduct/SingleProduct";

const GridView = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (id) => {
    const newProduct = products?.find((pd) => pd.id === id);
    setCart([...cart, { ...newProduct, quantity: 1 }]);
  };
  return (
    <>
   <Row className="grid">
        {products.map((product,index) => (
          <Col xl={3} lg={4} md={4} sm={6} xs={12} className="col-m-tb-15" key={index} >
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
      </Row>
    </>
  )
}

export default GridView