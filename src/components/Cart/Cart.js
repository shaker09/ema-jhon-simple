import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    const shipping = 15;
    const tax = (total + shipping)/10;
    const grandTotal = total + shipping +tax;
    return (
        <div>
            <div className="orderNumber">
                 <h3>Order Summary</h3>
                 <p><h5>Items ordered: {props.cart.length}</h5></p>
            </div>
            <br />
            <div className="totalPrice">
                <p>Total: ${total.toFixed(2)}</p>
                <p>Shipping: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className="Tprice">Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;