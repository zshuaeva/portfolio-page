import { NavLink } from 'react-router-dom';
import logo from '../icons/LogoLarge.png';
import '../stylesheets/Nav.css';

function Nav({ handleNavClick }) {
  return (
    <>
      <nav id="nav" className="navbar-fixed-container" onClick={handleNavClick}>
        <NavLink className="nav-logo" to={'/'}>
          <img
            src={logo}
            alt="Logo"
            style={{
              maxHeight: '75px',
              paddingTop: '10px',
              paddingLeft: '10px',
            }}
          />
          Joshua Evangelista
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;
