import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Landing.module.css";
import headerLeft from '../../assets/header-left.svg';
import headerRight from '../../assets/header-right.svg';
import logo from '../../assets/Vector 2.svg';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/menu');
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.landing}>
      <header className={styles.landing__header}>
        <h1>AIR BEAN</h1>
        <h2>DRONEDELIVERED COFFEE</h2>
      </header>
      <figure className={styles.landing__leafs}>
        <img src={headerLeft} />
        <div className={styles.eclipse}>
          <img src={logo} style={{ width: "38px" }} />
        </div>
        <img src={headerRight} />
      </figure>
    </div>
  );
};

export default Landing;