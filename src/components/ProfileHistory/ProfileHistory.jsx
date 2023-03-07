import React from 'react';
import profileImg from '../../assets/Profile.svg'
import styles from './ProfileHistory.module.css'


const ProfileHistory = () => {
    return (
        <div className={styles.Profile__history}>
            <header className={styles.profile__header}>
                <img src={profileImg} style= {{height: '94px'}} />
                <h1>Sixten Kaffelövér</h1>
               </header>
               <section className={styles.profile__content}>
                <article className={styles.profile__order__title}>
                    <h1>Orderhistorik</h1>
                        <h2>#AB1123282323Z</h2>
                        <p>20/03/06</p>
                        <p>total ordersumma </p>
                </article>
               </section>

    </div>
    );
};

export default ProfileHistory;