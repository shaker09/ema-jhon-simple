import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity =1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15: 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping +tax;
    return (
        <div>
            <div className="orderNumber">
                 <h3>Order Summary</h3>
                 <h5>Items ordered: {totalQuantity}</h5>
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