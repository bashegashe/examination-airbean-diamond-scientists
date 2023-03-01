import React from 'react';
import profileImg from '../../assets/Group 6.svg'
import styles from './ProfileForm.module.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { Form } from 'react-router-dom';

const ProfileForm = () => {
    const [page, setPage] = useState('login')
    return (
        <section className={styles.profile__card}>
            <div className={styles['profile__card-main']}>
                <section className={styles['profile__card-top']}>
                    <img src={profileImg}/>
                    <h1>Välkommen till AirBean-familjen!</h1>
                    {page==="login" ? <p>logga in nedan för att se din orderhistorik.</p> : <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p> }
                    
                </section>
                <Form className={styles['profile__card-bot']}>
                    <label htmlFor="">Namn</label>
                    <input type="text" value={"Stig Stormare"} />
                    <label htmlFor="">Lösenord</label>
                    <input type="password" value={"*******"}/>
                    {page==="login"?<p>Inget konto? Skapa ett <span className={styles['profile__card-bot-span']} onClick={()=>setPage('register')} >här</span></p>:<p>Redan medlem? Logga in <span className={styles['profile__card-bot-span']} onClick={()=>setPage('login')} >här</span></p>}
                </Form>
                <div className={styles['profile__card-button']}>
                    {page==="login" ? <Button>Logga in </Button> : <Button>Skapa konto</Button>}
                </div>    
            </div>
        </section>
    );
};

export default ProfileForm;