import header from '../../assets/header.svg';
import { Link } from 'react-router-dom';
import menuLogo from '../../assets/navicon-open.svg';
import NavigationModal from '../NavigationModal/NavigationModal';
import { useState } from 'react';

function Header({ hasNav, children }) {
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);

  function showNavigationMenuHandler() {
    setShowNavigationMenu(!showNavigationMenu);
  }

  return (
    <>
      {showNavigationMenu && (
        <NavigationModal
          showNavigationMenuHandler={showNavigationMenuHandler}
        />
      )}
      <header style={{ position: 'relative', zIndex: 0 }}>
        {hasNav === true && (
          <div
            onClick={showNavigationMenuHandler}
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              cursor: 'pointer',
            }}
          >
            {/* <Link to="/nav"> */}
            <img src={menuLogo} alt="" />
            {/* </Link> */}
          </div>
        )}
        <img src={header} alt="Header" style={{ height: '113px' }} />
        {children}
      </header>
    </>
  );
}

export default Header;
