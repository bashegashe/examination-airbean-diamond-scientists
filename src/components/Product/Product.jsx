import React from 'react';
import './Product.css';
import plusSignLogo from '../../assets/Vector 3.svg';
function Product({ id, title, description, price }) {
  return (
    <article className="product">
      <button className="product__add">
        <img src={plusSignLogo} alt="" />
      </button>
      <section className="product__name">
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
