import React, { useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import ProfileHistory from '../../components/ProfileHistory/ProfileHistory';
import styles from './Profile.module.css'
import * as api from '../../utils/api';
import Header from '../../components/Header/Header';

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
            <Header hasNav={true}/>
            <ProfileForm />
        </div>
    );
};

export default Profile;
