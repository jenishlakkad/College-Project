import React from "react";
import { Form } from "react-bootstrap";

const ShippingMethod = () => {
  return (
    <>
      <div className="shippingmethod">
        <Form>
          <div className="form-group text-left">
            <span className="form-check d-inline-block">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="free_ship"
                checked
              />
              <label className="form-check-label">Free shipping</label>
            </span>
            <span className="form-check d-inline-block ml-2">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="with_ship"
              />
              <label className="form-check-label">shipping</label>
            </span>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ShippingMethod;
