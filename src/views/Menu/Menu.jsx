import React, { useState } from 'react';
import './Menu.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import menuLogo from '../../assets/navicon-open.svg';
import shoppingCartLogo from '../../assets/bag.svg';
import Cart from '../../components/Cart/Cart';

function Menu() {
  const [showModal, setShowModal] = useState(false);
  function showModalHandler() {
    setShowModal(!showModal);
  }
  return (
    <section className={`menu ${showModal ? 'modal__dark' : ''}`}>
      <Header />
      <nav className="nav">
        <img src={menuLogo} alt="" />
        <section onClick={showModalHandler} className="nav__cart">
          <img src={shoppingCartLogo} alt="" />
          <section className="nav__cart-products">
            <span>0</span>
          </section>
        </section>
      </nav>
      {showModal ? (
        <Cart />
      ) : (
        <>
          <main>
            <section className="menu__section">
              <h2>MENY</h2>
            </section>
            <section className="product__section">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </section>
          </main>
        </>
      )}
      <Footer />
    </section>
  );
}

export default Menu;
