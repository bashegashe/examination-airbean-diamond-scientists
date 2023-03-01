import React from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import styles from './Profile.module.css'
import headerPicture from '../../assets/header.svg'
import menuIcon from '../../assets/navicon-open.svg'


const Profile = () => {
    const isLoggedIn = false;

    return (
        <div className={styles.profile}>
            <header>
                <img className={styles['profile__img-icon']} src={menuIcon}/>
                <img src={headerPicture}/>
            </header>
            <ProfileForm/>
        </div>
    );
};

export default Profile;