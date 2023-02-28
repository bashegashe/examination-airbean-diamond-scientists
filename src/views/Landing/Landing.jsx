import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Landing.css";
import headerLeft from '../../assets/header-left.svg';
import headerRight from '../../assets/header-right.svg';
import logo from '../../assets/Vector 2.svg';

const Landing = () => {
/*     const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('/nav');
        }, 3500);
    
        return () => {
          clearTimeout(timer);
        };
      }, [navigate]); 
       */
    return (
        <div className='landing'>
            <header className="landing__header">
                <h1>AIR BEAN</h1>
                <h2>DRONEDELIVERED COFFEE</h2>
            </header>
            <figure className="landing__leafs">
            <img src={headerLeft} />
            <div className="eclipse">
            <img src={logo} style= {{width:"38px"}} />
            </div>
            <img src={headerRight} />
            </figure>
        </div>
    );
};

export default Landing;