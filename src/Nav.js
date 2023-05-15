import { Flex, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from './LogoLarge.png';
import "./Nav.css";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav id="nav" className="navbar fixed-top">
      <Flex align="center" justifyContent="space-between" w="100%">
        <NavLink className="navbar-brand navbar-brand-custom fw-bold" to={"/"}>
          <img src={logo} alt="Logo" style={{ maxHeight: '100px', paddingTop: '10px' }} />
        </NavLink>
        <button onClick={toggleColorMode} className="d-flex p-4" style={{ paddingRight: '16px' }}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </Flex>
      <VStack spacing={8}>
        "test"
      </VStack>
    </nav>
  );
}

export default Nav;
