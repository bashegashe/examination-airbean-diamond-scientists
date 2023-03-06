import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../assets/navicon-closed.svg';
import styles from './NavigationModal.module.css';

const NavigationModal = () => {
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);

  function showNavigationMenuHandler() {
    setShowNavigationMenu(!showNavigationMenu);
  }

  return (
    showNavigationMenu && (
      <div className={styles.nav}>
        <header className={styles.nav__header}>
          <a href="#" onClick={showNavigationMenuHandler}>
            <img src={closeIcon} />
          </a>
        </header>
        <section className={styles.nav__menu}>
          <Link to={'/menu'}>
            {' '}
            <h2>Meny</h2>{' '}
          </Link>
          <hr />
          <Link to={'/about'}>
            <h2>Vårt kaffe</h2>
          </Link>
          <hr />
          <Link to={'/profile'}>
            <h2>Min profil</h2>
          </Link>
          <hr />
          <Link to={'/status'}>
            <h2>Orderstatus</h2>
          </Link>
          <hr />
          <Link to={'/profile'}>
            <h2>Orderhistorik</h2>
          </Link>
        </section>
      </div>
    )
  );
};

export default NavigationModal;
