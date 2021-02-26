import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
      else  if (total > 15) {
            shipping = 4.99;
        }
        else if (total > 0) {
            shipping = 12.99
        }
       const tax = (total / 10).toFixed(2);
        const grandTotal = (total + shipping + Number(tax).toFixed(2))
    return (
        <div className="product-box">
            <h4>hello</h4>
            <p>Items ordered : {cart.length}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Product price : {total}</small></p>
            <p><small>tax : {tax}</small></p>
            {/* <p><small>Total Price: {total + shipping +Number(tax).toFixed(2)}</small></p> */}
            <p><small>Total Price: {grandTotal}</small></p>
        </div>
    );
};

export default Cart;