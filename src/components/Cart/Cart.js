import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let totalQuentity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quentity) {
            product.quentity = 1;
        }
        total = total + product.price * product.quentity;
        totalQuentity = totalQuentity + product.quentity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuentity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;