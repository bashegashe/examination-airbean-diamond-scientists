import React, { useEffect, useState } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import styles from './Profile.module.css'
import headerPicture from '../../assets/header.svg'
import menuIcon from '../../assets/navicon-open.svg'
import * as api from '../../utils/api';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        async function isLoggedIn() {
            const token = sessionStorage.getItem('USER_TOKEN');

            if(token) {
                const loggedInFromAPI = await api.isLoggedIn(token);

                if(loggedInFromAPI) {
                    setLoggedIn(true);
                }
            }
        }

        isLoggedIn();
    }, [loggedIn]);

    return (
        <div className={styles.profile}>
            <header>
                <Link to="/nav"><img className={styles['profile__img-icon']} src={menuIcon} /></Link>
                <img src={headerPicture} />
            </header>
            <ProfileForm setLoggedIn={setLoggedIn} />
        </div>
    );
};

export default Profile;
