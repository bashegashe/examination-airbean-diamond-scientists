import React from 'react';
import './Product.css';
import plusSign from '../../assets/Vector 3.svg';
function Product() {
  return (
    <article className="product">
      <section className="product-add">
        <img src={plusSign} alt="" />
      </section>
      <section className="product-name">
        <h3>Bryggkaffe..........</h3>
        <p>Bryggd på månadens bönor</p>
      </section>
      <h3>49 kr</h3>
    </article>
  );
}

export default Product;
