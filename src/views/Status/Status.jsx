import React from 'react';
import Button from '../../components/Button/Button';
import drone from '../../assets/Group 5.svg'
import styles from "./Status.module.css"
import { useNavigate, Link } from 'react-router-dom';

const Status = (props) => {
    const navigate = useNavigate();

    return (
        <div className={styles.status}>
            <header className={styles.status__header}><p>Ordernummer <span>{props.orderNr}</span></p></header>
            <section className={styles['status__section-drone']}>
                <img src={drone}/>           
            </section>
            <section className={styles['status__section-mid']}>
                <h2>Din beställning är på väg!</h2>
                <p><span>{props.eta}</span> minuter</p>
            </section>
            <section className={styles['status__section-bot']}>
                <Link to="/about"><Button type={'light'}>Ok, cool!</Button></Link>
            </section>
        </div>
    );
};
export default Status;