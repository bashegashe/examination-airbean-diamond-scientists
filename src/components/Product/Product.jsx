import React from 'react';
import './Product.css';
import plusSignLogo from '../../assets/Vector 3.svg';
function Product() {
  return (
    <article className="product">
      <button className="product__add">
        <img src={plusSignLogo} alt="" />
      </button>
      <section className="product__name">
        <h3>
          Bryggkaffe<span>...............</span>
        </h3>
        <p>Bryggd på månadens bönor</p>
      </section>
      <h3>49 kr</h3>
    </article>
  );
}

export default Product;
