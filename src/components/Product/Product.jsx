import React from 'react';
import styles from './Product.module.css';
import plusSignLogo from '../../assets/Vector 3.svg';

function Product({ id, title, description, price }) {
  return (
    <article className={styles.product}>
      <button className={styles.product__add}>
        <img src={plusSignLogo} alt="plusSign logo" />
      </button>
      <section className={styles.product__name}>
        <h3>
          {title}
          <span></span>
        </h3>
        <p>{description}</p>
      </section>
      <h3>{price} kr</h3>
    </article>
  );
}

export default Product;
