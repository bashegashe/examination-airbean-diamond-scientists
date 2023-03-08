import React, { useEffect, useState } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import ProfileHistory from '../../components/ProfileHistory/ProfileHistory';
import styles from './Profile.module.css'
import * as api from '../../utils/api';
import Header from '../../components/Header/Header';

const Profile = () => {
    const [showForm, setShowForm] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        async function isLoggedIn() {
            const userIsLoggedIn = await api.isLoggedIn();

            if (userIsLoggedIn) {
                setLoggedIn(true);
            } else {
                setShowForm(true);
            }
        }

        isLoggedIn();
    }, []);

    return (
        <div className={styles.profile}>
            <Header hasNav={true} />

            {!loggedIn && showForm && <ProfileForm setLoggedIn={setLoggedIn} />}
            {loggedIn && <ProfileHistory />}
        </div>
    );
};

export default Profile;
