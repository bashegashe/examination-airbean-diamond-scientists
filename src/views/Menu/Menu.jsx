import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import menuLogo from '../../assets/navicon-open.svg';
import shoppingCartLogo from '../../assets/bag.svg';
import Cart from '../../components/Cart/Cart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCoffeMenu } from '../../utils/api';
import NavigationModal from '../../components/NavigationModal/NavigationModal';

function Menu() {
  const state = useSelector((state) => state);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await getCoffeMenu();
      setProducts(res);
    }
    if (state?.products) setProducts(state.products);
    else getData();
    getData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem('CURRENT_CART', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    setProducts(state.coffeeMenu);
  }, []);

  function showModalHandler() {
    setShowModal(!showModal);
  }

  function showNavigationMenuHandler() {}

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

      <Header />
      <nav className={styles.nav}>
        <img onClick={showNavigationMenuHandler} src={menuLogo} alt="" />

        <section className={styles.nav__cart}>
          <img src={shoppingCartLogo} alt="" />
          <section className={styles['nav__cart-products']}>
            <span>{cartCounter}</span>
          </section>
        </section>
      </nav>

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
