import React from 'react';
import profileImg from '../../assets/Group 6.svg'
import styles from './ProfileForm.module.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { Form } from 'react-router-dom';
import * as api from '../../utils/api';
import ProfileHistory from '../ProfileHistory/ProfileHistory';

const ProfileForm = (props) => {
    const [page, setPage] = useState('login')
    const [username, setUsername] = useState('Stig Stormare');
    const [password, setPassword] = useState('*******');

    const [errorMessage, setErrorMessage] = useState(null);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    function showError(message) {
        setErrorMessage(message);
        setShowErrorMessage(true);

        setTimeout(() => setShowErrorMessage(false), 3000);
    }

    async function userLogin() {
        const loginResult = await api.logUserIn({
            username,
            password
        });

        if (loginResult.success) {
            sessionStorage.setItem('USER_TOKEN', loginResult.token);
            sessionStorage.setItem('USER_NAME', username);

            props.setLoggedIn(true);
        } else {
            showError(loginResult.message);
        }
    }

    async function userRegister() {
        const createNewUser = await api.createNewUser({
            username,
            password
        });

        if (createNewUser.success) {
            await userLogin(); // Registeringen lyckades, loggar in användaren automatiskt och navigerar vidare
        } else {
            showError(createNewUser.message);
        }
    }

    return (
        <section className={styles.profile__card}>
            <div className={styles['profile__card-main']}>
                <section className={styles['profile__card-top']}>
                    <img src={profileImg} />
                    <h1>Välkommen till AirBean-familjen!</h1>
                    {page === "login" ?
                        <p>Logga in nedan för att se din orderhistorik.</p> :
                        <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
                    }

                </section>
                <Form className={styles['profile__card-bot']}>
                    <label htmlFor="">Namn</label>
                    <input type="text" value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
                    <label htmlFor="">Lösenord</label>
                    <input type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
                    {page === "login" ?
                        <p>Inget konto? Skapa ett <span> </span>
                            <span className={styles['profile__card-bot-span']} onClick={() => setPage('register')}>
                                här
                            </span>
                        </p> :
                        <p>Redan medlem? Logga in <span> </span>
                            <span className={styles['profile__card-bot-span']} onClick={() => setPage('login')}>
                                här
                            </span>
                        </p>
                    }
                </Form>
                <div className={styles['profile__card-button']}>
                    {page === "login" ?
                        <Button onClick={userLogin}>Logga in </Button> :
                        <Button onClick={userRegister}>Skapa konto</Button>
                    }
                </div>
                <p
                    className={styles.errorMessage}
                    style={{ display: showErrorMessage ? 'block' : 'none' }}
                >
                    {errorMessage}
                </p>
            </div>
        </section>
    );
};

export default ProfileForm;