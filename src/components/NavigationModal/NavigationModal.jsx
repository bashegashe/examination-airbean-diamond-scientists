import React from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../assets/navicon-closed.svg';
import styles from './NavigationModal.module.css';

const NavigationModal = ({ showNavigationMenuHandler }) => {
  return (
    <div className={styles.nav}>
      <header className={styles.nav__header}>
        <a href="#">
          <img onClick={showNavigationMenuHandler} src={closeIcon} />
        </a>
      </header>
      <section className={styles.nav__menu}>
        <Link to={'/menu'} onClick={showNavigationMenuHandler}>
          <h2>Meny</h2>
        </Link>
        <hr />
        <Link to={'/about'} onClick={showNavigationMenuHandler}>
          <h2>Vårt kaffe</h2>
        </Link>
        <hr />
        <Link to={'/profile'} onClick={showNavigationMenuHandler}>
          <h2>Min profil</h2>
        </Link>
        <hr />
        <Link to={'/status'} onClick={showNavigationMenuHandler}>
          <h2>Orderstatus</h2>
        </Link>
        <hr />
        <Link to={'/profile'} onClick={showNavigationMenuHandler}>
          <h2>Orderhistorik</h2>
        </Link>
      </section>
    </div>
  );
};

export default NavigationModal;
