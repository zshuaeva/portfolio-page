import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
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
    setSelectedContent(<Contact />);
  };

  const handleNavClick = () => {
    setSelectedContent(<Bio />);
  };

  const handleProjectsClick = () => {
    setSelectedContent(<Projects />);
  };

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Nav className="sticky-nav" handleNavClick={handleNavClick} />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/"
            element={<MainContent selectedContent={selectedContent} />}
          />
        </Routes>
        <Footer
          className="sticky-footer"
          handleContactClick={handleContactClick}
          handleProjectsClick={handleProjectsClick}
        />
      </BrowserRouter>
    </ChakraProvider>
  );
}

function MainContent({ selectedContent }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div
      className="main-page-content"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <img src={stryker} alt="stryker" className="stryker-logo" />
      <div className="dark-mode-button">
        <button onClick={toggleColorMode} className="nightmode-button">
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
      <div className="bio-box-container">{selectedContent}</div>
    </div>
  );
}

export default App;
