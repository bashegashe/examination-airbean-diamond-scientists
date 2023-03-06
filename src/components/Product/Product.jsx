import React from 'react';
import styles from './Product.module.css';
import plusSignLogo from '../../assets/Vector 3.svg';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../actions/cartActions';

function Product({ id, title, description, price }) {
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    dispatch(addCartItem({ id, title, description, price, quantity: 1 }));
  };

  return (
    <article className={styles.product}>
      <button className={styles.product__add} onClick={addItemToCartHandler}>
        <img src={plusSignLogo} alt="plusSign logo" />
      </button>
      <section className={styles.product__name}>
        <h3>
          {title}
<<<<<<< HEAD
          <span style={{ display: 'inline' }}></span>
=======
          <span className={styles.product__separator}></span>
>>>>>>> origin/develop
        </h3>
        <p>{description}</p>
      </section>
      <h3>{price} kr</h3>
    </article>
  );
}

export default Product;
