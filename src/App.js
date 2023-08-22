import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import { Flex } from '@chakra-ui/react';
import Projects from './Projects';
import Bio from './bio';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';
import stryker from './stryker.png';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';


function App() {
  const [selectedContent, setSelectedContent] = useState(<Bio />);

  const handleContactClick = () => {
    console.log('this should work')
    setSelectedContent(<Contact />)
  };

  const handleNavClick = () => {
    console.log('back to bio')
    setSelectedContent(<Bio />);
  };

  const handleProjectsClick = () => {
    console.log(' got to projects')
    setSelectedContent(<Projects />)
  }

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Nav className="sticky-nav" handleNavClick={handleNavClick} />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<MainContent selectedContent={selectedContent} />} />
        </Routes>
        <Footer className="sticky-footer" handleContactClick={ handleContactClick } handleProjectsClick={ handleProjectsClick } />
      </BrowserRouter>
    </ChakraProvider>
  );
}

function MainContent({ selectedContent }) {
  const { colorMode, toggleColorMode } = useColorMode('dark');

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <img
        src={stryker}
        alt="stryker"
        className='stryker-logo'
      />
      <div className="dark-mode-button">
      <button
          onClick={toggleColorMode}
          className="nightmode-button"
          style={{ paddingRight: '16px' }}
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
      <div className="bio-box-container">
        {selectedContent}
      </div>
    </Flex>
  );
}

export default App;
