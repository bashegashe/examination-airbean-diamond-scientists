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
               </section>

    </div>
    );
};

export default ProfileHistory;