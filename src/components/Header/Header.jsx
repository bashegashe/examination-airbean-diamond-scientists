import header from '../../assets/header.svg';
import { Link } from 'react-router-dom';
import menuLogo from '../../assets/navicon-open.svg';

function Header({ hasNav, children }) {
  return (
    <header style={{position: 'relative', zIndex: 0}}>
      {hasNav === true && (
        <div style={{position: 'absolute', top: '15px', left: '15px'}}>
          <Link to="/nav">
            <img src={menuLogo} alt="" />
          </Link>
        </div>
      )}
      <img src={header} alt="Header" style={{ height: '113px' }} />

      { children }
    </header>
  )
}

export default Header;
