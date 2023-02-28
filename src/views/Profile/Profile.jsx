import React from 'react';
import './Profile.css'
import headerPicture from '../../assets/header.svg'

const Profile = () => {
    return (
        <div className='profile'>
            <header>
                <img src={headerPicture}/>
            </header>
            <section className='profile__card'></section>  
        </div>
    );
};

export default Profile;