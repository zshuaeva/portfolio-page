import React from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import { Flex, WrapItem, Link, Button, Wrap  } from '@chakra-ui/react';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';
import stryker from './stryker.png'
import resume from './resume.pdf';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Nav className="sticky-nav" />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
        <Footer className="sticky-footer" />
      </BrowserRouter>
    </ChakraProvider>
  );
}

// Define your main content component
function MainContent() {
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

      <div className="bio">
        <p>
        <Link href={resume} isExternal>
              <Button colorScheme="teal" size="xs">
                Open Resume
              </Button>
            </Link>
        </p>
      <p>
      I'm equipped with a diverse technical toolkit that includes React, RESTful APIs, FastAPI, Django, Authorization, SQL, JavaScript, Python, and Domain-Driven Design. My past in operations has honed a robust work ethic in me, a tenacious problem-solving mindset, and an attention to efficiency and precision, rendering me a versatile player in any team.
      </p>
      <p>
After a rewarding career in retail banking, I've recently undergone a transformative journey through Hack Reactor's software engineering program. Now, I stand at the intersection of my past experience and newfound technical proficiency, ready to embrace new challenges in the tech industry.
</p>
In addition to my skills and experience, I bring a collaborative ethos to the table. I flourish in team environments, perpetually ready to exchange knowledge, learn from my peers, and unite to tackle challenges.
<p>
I'm currently seeking new opportunities, eager to harness my skills and mindset to a role where I can sculpt impactful digital solutions. I'm committed to continuous learning, staying abreast of the latest tech trends, and contributing to open-source projects. My hobby of photography not only fuels my creative spirit but also sharpens my eye for detail, both of which I intend to integrate into my tech endeavors.
</p>
<p>
Looking forward, I am excited to engage in meaningful collaborations, and to use my skills and creativity to generate innovative solutions in my next role. I am here to make a difference, one line of code and one snapshot at a time.
</p>
        </div>

    </Flex>
  );
}

export default App;
