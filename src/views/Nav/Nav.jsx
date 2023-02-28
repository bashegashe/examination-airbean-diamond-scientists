import React from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../assets/navicon-closed.svg'
import "./Nav.css"

const Nav = () => {
    return (
        <div className='nav'>
            <header className='nav__header'>
                <img src={closeIcon}/>
            </header>
            <section className='nav__menu'>
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