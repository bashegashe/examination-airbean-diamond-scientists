import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import closeIcon from '../../assets/navicon-closed.svg'
import styles from "./Nav.module.css"

const Nav = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    function handleClick() {
        navigate(-1, { state: { products: state.products } });
    }

    return (
        <div className={styles.nav}>
            <header className={styles.nav__header}>
                <a href="#" onClick={handleClick}><img src={closeIcon} /></a>
            </header>
            <section className={styles.nav__menu}>
                <Link to={"/menu"}> <h2>Meny</h2> </Link>
                <hr />
                <Link to={"/about"}><h2>Vårt kaffe</h2></Link>
                <hr />
                <Link to={"/profile"}><h2>Min profil</h2></Link>
                <hr />
                <Link to={"/status"}><h2>Orderstatus</h2></Link>
                <hr />
                <Link to={"/profile"}><h2>Orderhistorik</h2></Link>
            </section>
        </div>
    );
};

export default Nav;