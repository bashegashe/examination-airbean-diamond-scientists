import React from 'react';
import './Menu.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import menu from '../../assets/navicon-open.svg';
import shoppingCart from '../../assets/bag.svg';
function Menu() {
  return (
    <section className="menu-section">
      <Header />
      <nav className="header-section">
        <img src={menu} alt="" />
        <section className="header-cart">
          <img src={shoppingCart} alt="" />
          <section className="header-cart_products">
            <span>0</span>
          </section>
        </section>
      </nav>
      <main>
        <section className="menu">
          <h2>MENY</h2>
        </section>
        <section className="product-section">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default Menu;
