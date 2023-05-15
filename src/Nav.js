import { Flex, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from './LogoLarge.png';
import "./Nav.css";
import { WrapItem, Link, Button, Wrap } from "@chakra-ui/react";
import resume from './resume.pdf';

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav id="nav" className="navbar fixed-top">

      <Flex align="center" justifyContent="space-between" w="95%">
        <NavLink className="navbar-brand navbar-brand-custom fw-bold" to={"/"}>
          <img src={logo} alt="Logo" style={{ maxHeight: '100px', paddingTop: '10px' }} />
        </NavLink>
        <Wrap spacing={2} justifyContent="left">
                      <WrapItem>
                        <Link href="https://gitlab.com/zshuaeva" isExternal>
                          <Button colorScheme="teal" size='xs'>Git Lab</Button>
                        </Link>
                      </WrapItem>

                      <WrapItem>
                        <Link href="https://linkedin.com/in/joshuaevangelista" isExternal>
                          <Button colorScheme="teal" size='xs'>Linkedin</Button>
                        </Link>
                      </WrapItem>

                      <WrapItem>
                        <Link href="https://instagram.com/disneyland.arw" isExternal>
                          <Button colorScheme="teal" size='xs'>Photography</Button>
                        </Link>
                      </WrapItem>
        </Wrap>

        <button onClick={toggleColorMode} className="d-flex p-4" style={{ paddingRight: '16px' }}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </Flex>
      <VStack spacing={8}>
      </VStack>
    </nav>
  );




}

export default Nav;
