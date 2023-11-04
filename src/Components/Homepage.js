import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productActions';
import { addToCart } from '../redux/cartActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>Home Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
