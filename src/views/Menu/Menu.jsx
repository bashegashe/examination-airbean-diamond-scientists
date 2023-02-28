import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import menuLogo from '../../assets/navicon-open.svg';
import shoppingCartLogo from '../../assets/bag.svg';
import Cart from '../../components/Cart/Cart';
import { getCoffeMenu } from '../../utils/api';
<<<<<<< Updated upstream

=======
import { Link, useLocation } from 'react-router-dom';
>>>>>>> Stashed changes
function Menu() {
  const { state } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  function showModalHandler() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function getData() {
      const res = await getCoffeMenu();
      setProducts(res);
    }

    if (state?.products)
      setProducts(state.products);
    else
      getData();
  }, []);

  return (
    <section className={styles.menu}>
      <div
        style={{ display: showModal ? 'block' : 'none' }}
        className={styles.modal}
      ></div>

      <Header />
      <nav className="nav">
        <Link to="/nav" state={{ products }}><img src={menuLogo} alt="" /></Link>
        <section onClick={showModalHandler} className="nav__cart">
          <img src={shoppingCartLogo} alt="" />
          <section className={styles['nav__cart-products']}>
            <span>0</span>
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
