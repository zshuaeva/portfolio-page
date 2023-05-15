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
        <Flex justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
          <Grid p={{ base: 5, md: 10, lg: 300 }}>
            <VStack spacing={5} alignItems="center">
              <Image
                src={logo}
                alt="logo"
                maxWidth="300px"
              />
              <Text as="h1">Joshua Evangelista</Text>
              <WrapItem>
                <Link href={resume} isExternal>
                  <Button colorScheme="teal" size="xs">
                    Open Resume
                  </Button>
                </Link>
              </WrapItem>
            </VStack>
          </Grid>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
