import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Landing.css";
import headerLeft from '../../assets/header-left.svg';
import headerRight from '../../assets/header-right.svg';
import logo from '../../assets/Vector 2.svg';
import { getCoffeMenu } from '../../utils/api';
import { addCoffeMenu } from '../../actions/menuActions';
import { useDispatch } from 'react-redux';

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMenu() {
      const menu = await getCoffeMenu();

      dispatch(addCoffeMenu(menu));

      const timer = setTimeout(() => {
        navigate('/nav');
      }, 3500);

      return () => {
        clearTimeout(timer);
      };
    }

    getMenu();
  }, []);

  return (
    <div className='landing'>
      <header className="landing__header">
        <h1>AIR BEAN</h1>
        <h2>DRONEDELIVERED COFFEE</h2>
      </header>
      <figure className="landing__leafs">
        <img src={headerLeft} />
        <div className="eclipse">
          <img src={logo} style={{ width: "38px" }} />
        </div>
        <img src={headerRight} />
      </figure>
    </div>
  );
};

export default Landing;