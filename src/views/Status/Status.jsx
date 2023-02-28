import React from 'react';
import Button from '../../components/Button/Button';
import drone from '../../assets/Group 5.svg'
import styles from "./Status.module.css"

const Status = () => {
    return (
        <div className={styles.status}>
            <header className={styles.status__header}><p>Ordernummer <span>#12DV23F</span></p></header>
            <section className={styles['status__section-drone']}>
                <img src={drone}/>           
            </section>
            <section className={styles['status__section-mid']}>
                <h2>Din beställning är på väg!</h2>
                <p><span>13</span> minuter</p>
            </section>
            <section className={styles['status__section-bot']}>
                <Button type={styles.light}>Ok, cool!</Button>
            </section>
        </div>
    );
};
export default Status;