import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const Payment = () => {
  return (
    <>
      <div className="payment">
        <Form>
          <div className="form-group text-left checkout-signin">
            <span className="form-check d-inline-block">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="free_ship"
                checked
              />
              <label className="form-check-label">Pay By Check</label>
            </span>
            <span className="form-check d-inline-block ml-2">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="with_ship"
              />
              <label className="form-check-label">Pay By Bank</label>
            </span>
            <InputGroup className="mb-3 mt-2">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <label className="checkout-check ">
                I Accept The Privacy Policy
              </label>
            </InputGroup>
            <button type="submit" className="mb-3 processCheckOut d-inline-block">
              Order with an obligation to pay
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Payment;
