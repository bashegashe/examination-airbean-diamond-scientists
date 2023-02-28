import React from 'react';
import './Profile.css'
import headerPicture from '../../assets/header.svg'

const Profile = () => {
    return (
        <div className='profile'>
            <header>
                <img src={headerPicture} alt="" />
            </header>  
        </div>
    );
};

export default Profile;