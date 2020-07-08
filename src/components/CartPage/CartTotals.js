import React from "react";
import { ProductConsumer } from "../../context";

export default function CartTotals() {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <h4 style={{ letterSpacing: "0.1rem", fontFamily: "Roboto" }}>
                  subtotal: ${cartSubTotal}
                </h4>
                <h4 style={{ letterSpacing: "0.1rem", fontFamily: "Roboto" }}>
                  Tax: ${cartTax}
                </h4>
                <h4 style={{ letterSpacing: "0.1rem", fontFamily: "Roboto" }}>
                  total: ${cartTotal}
                </h4>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
