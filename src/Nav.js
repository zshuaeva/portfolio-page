import { VStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from './LogoLarge.png';
import './Nav.css';


function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <nav id="nav" className="navbar-fixed-container">
        <NavLink className="nav-logo" to={'/'}>
          <img
            src={logo}
            alt="Logo"
            style={{
              maxHeight: '75px',
              paddingTop: '10px',
              paddingLeft: '10px',
            }} />
          Joshua Evangelista
        </NavLink>

        <button
          onClick={toggleColorMode}
          className="nightmode-button"
          style={{ paddingRight: '16px' }}
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      <VStack spacing={8}></VStack>
    </nav>
    </>
  );
}

export default Nav;
