import React from 'react';
import { app } from './firebase'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react';
import { Heading, Button, Image, Divider, WrapItem, Wrap } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Nav';
import logo from "./LogoLarge.png";
import resume from './resume.pdf';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Nav />

        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={300}>
            <VStack spacing={5}>

              <Image
                src={logo}
                alt="logo"
                maxWidth="300px"

              />
              <text>Joshua Evangelista</text>
              <Flex align="right">
          <WrapItem>
            <Link href={resume} target="_blank">
              <Button colorScheme="teal" size="xs">
               Open Resume
              </Button>
            </Link>
          </WrapItem>
            </Flex>

            </VStack>
          </Grid>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
