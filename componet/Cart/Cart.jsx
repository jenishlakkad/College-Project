import { Card } from "./Card/Card";
import { CartContext } from "../../pages/_app";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";
export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [addcount, addsetCount] = useState(0);
  const total = cart.reduce(
    (total, pdtitem) =>
      total + Number(pdtitem.price) * Number(pdtitem.quantity),
    0
  );
  const handlePdtQty = (change, quantity, id) => {
    if (change === "increment") {
      cart.find((pdtitem) => pdtitem.id === id).quantity = quantity + 1;
      addsetCount(addcount++);
    }
    if (change === "decrement" && quantity > 1) {
      cart.find((pdtitem) => pdtitem.id === id).quantity = quantity - 1;
      addsetCount(addcount++);
    }
  };
  useEffect(() => {
    setCart(cart);
  }, [cart, addcount]);
  return (
    <>
      <div className="container addtoCART">
        <div className="card">
          <Row>
            <Col xl={12}>
              <div className="cardbox">
                <div className="cardTblBox">
                  <div className="cardRow cardHeadRow">
                    <div className="cart-width-main">
                      <div className="cartTableCol">Product</div>
                    </div>
                    <div className="cart-sub-width">
                      <div className="cartTableCol">Price</div>
                      <div className="cartTableCol">Quantity</div>
                      <div className="cartTableCol">Total</div>
                    </div>
                  </div>
                  {cart.map((cart) => (
                    <Card
                      onChangeQuantity={(change, quantity) =>
                        handlePdtQty(change, quantity, cart.id)
                      }
                      key={cart.id}
                      cart={cart}
                    />
                  ))}
                </div>
              </div>
            </Col>
            <Col xl={6}></Col>
            <Col xl={6}>
              <div className="cbottom">
                <div className="cbottom-total">
                  <div className="cbottom-totalgoods mb-3 ">
                    <span className="cgood">Goods on</span>
                    <span className="cgood-price">${total.toFixed(2)}</span>
                  </div>
                  <div className="cbottom-totalpromo mb-3">
                    <span className="cgood">Discount on promo code</span>
                    <span className="cgood-price">No</span>
                  </div>
                  <div className="cbottom-totalnum v">
                    <span className="cgood"> total: </span>
                    <span className="cgood-price">${total.toFixed(2)}</span>
                  </div>
                  <hr />
                  <button type="button" className="processCheckOut">
                    <Link href="/Checkout">
                      <a>Proceed to checkout</a>
                    </Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Cart;
