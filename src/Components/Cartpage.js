import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartActions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h1>My Cart Page</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      <div>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        <button onClick={() => checkout()}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
