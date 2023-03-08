import header from '../../assets/header.svg';
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
            <img src={menuLogo} alt="" />
          </div>
        )}
        <img src={header} alt="Header" style={{ height: '113px' }} />
        {children}
      </header>
    </>
  );
}

export default Header;
