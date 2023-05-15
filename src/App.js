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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Nav />

        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>

              <Image
                src={logo}
                alt="logo"
                maxWidth="300px"

              />
              <text>Website coming soon!</text>

              <Card maxW='sm'>
                <CardBody>

                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Joshua Evangelista</Heading>
                    <Text>
                      Software Engineer
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                      San Francisco, CA
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Stack direction='column'>
                    <Wrap spacing={2} justifyContent="center">
                      <WrapItem>
                        <Link href="https://gitlab.com/zshuaeva" isExternal>
                          <Button colorScheme="orange" size='xs'>Git Lab</Button>
                        </Link>
                      </WrapItem>

                      <WrapItem>
                        <Link href="https://linkedin.com/in/joshuaevangelista" isExternal>
                          <Button colorScheme="linkedin" size='xs'>Linkedin</Button>
                        </Link>
                      </WrapItem>

                      <WrapItem>
                        <Link href="https://instagram.com/disneyland.arw" isExternal>
                          <Button colorScheme="facebook" size='xs'>Photography</Button>
                        </Link>
                      </WrapItem>


                      <WrapItem>
                        <Link href={resume} target="_blank">
                          <Button colorScheme="teal" size="xs">
                            Open Resume
                          </Button>
                        </Link>
                      </WrapItem>

                    </Wrap>

                    <p>
                      <Text>
                        Javascript | Python | Django | React | FastAPI | MongoDB | CSS | HTML
                      </Text>
                    </p>
                  </Stack>
                </CardFooter>
              </Card>
            </VStack>
          </Grid>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
