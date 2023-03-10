import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import shoppingCartLogo from '../../assets/bag.svg';
import Cart from '../../components/Cart/Cart';
import { useSelector } from 'react-redux';
import * as api from '../../utils/api';

function Menu() {
  const state = useSelector((state) => state);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getCoffeeMenu() {
      const res = await api.getCoffeeMenu();

      setProducts(res);
    }

    getCoffeeMenu();
  }, []);

  useEffect(() => {
    sessionStorage.setItem('CURRENT_CART', JSON.stringify(state.cart));
  }, [state.cart]);

  function showModalHandler() {
    setShowModal(!showModal);
  }

  let cartCounter = 0;

  state.cart.map((cartItem) => {
    cartCounter += cartItem.quantity;
  });

  return (
    <section className={styles.menu}>
      <div
        style={{ display: showModal ? 'block' : 'none' }}
        className={styles.modal}
        onClick={showModalHandler}
      ></div>

      <Header hasNav={true}>
        <nav className={styles.nav}>
          <section onClick={showModalHandler} className={styles.nav__cart}>
            <img src={shoppingCartLogo} alt="" />
            <section className={styles['nav__cart-products']}>
              <span>{cartCounter}</span>
            </section>
          </section>
        </nav>
      </Header>

      {showModal && <Cart />}

      <main>
        <section className={styles.menu__section}>
          <h2>MENY</h2>
        </section>
        <section className={styles.product__section}>
          {products.map((item) => (
            <Product
              id={item.id}
              title={item.title}
              description={item.desc}
              price={item.price}
              key={item.id}
            />
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default Menu;
