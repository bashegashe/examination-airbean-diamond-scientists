import React from 'react';
import profileImg from '../../assets/Group 6.svg'
import styles from './ProfileForm.module.css'
import Button from '../Button/Button.jsx'
import { Form } from 'react-router-dom';

const ProfileForm = () => {
    return (
        <section className={styles.profile__card}>
            <div className={styles['profile__card-main']}>
                <section className={styles['profile__card-top']}>
                    <img src={profileImg}/>
                    <h1>Välkommen till AirBean-familjen!</h1>
                    <p>logga in nedan för att se din orderhistorik.</p>
                </section>
                <Form className={styles['profile__card-bot']}>
                    <label htmlFor="">Namn</label>
                    <input type="text" value={"Stig Stormare"} />
                    <label htmlFor="">Lösenord</label>
                    <input type="password" value={"*******"}/>
                    <p>Inget konto? Skapa ett <span className={styles['profile__card-bot-span']}>här</span></p>
                </Form>
                <div className={styles['profile__card-button']}>
                    <Button>Logga in</Button>
                </div>    
            </div>
        </section>
    );
};

export default ProfileForm;