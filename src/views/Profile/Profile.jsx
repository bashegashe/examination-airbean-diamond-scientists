import React, { useEffect, useState } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import styles from './Profile.module.css'
import headerPicture from '../../assets/header.svg'
import menuIcon from '../../assets/navicon-open.svg'
import * as api from '../../utils/api';
import { Link } from 'react-router-dom';

const Profile = () => {
    useEffect(() => {
        async function isLoggedIn() {
            if (await api.isLoggedIn()) {
                // Navigera till annan sida, användaren är inloggad
            }
        }

        isLoggedIn();
    }, []);

    return (
        <div className={styles.profile}>
            <header>
                <Link to="/nav"><img className={styles['profile__img-icon']} src={menuIcon} /></Link>
                <img src={headerPicture} />
            </header>
            <ProfileForm />
        </div>
    );
};

export default Profile;
