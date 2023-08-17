import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { TypeAnimation } from 'react-type-animation';
import linkedinIcon from './linkedin.ico';
import githubIcon from './github.svg';
import { Button } from '@chakra-ui/react';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-text">
        <TypeAnimation
          sequence={[
            "========> print('Hire me!')",
            1000,
            "========> print('Contact me!')",
            1000,
            "========> print('LinkedIn')",
            1000,
            "========> print('GitHub')",
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>

      <div className="footer-links">
        <div>
          <a href="https://www.linkedin.com/in/joshuaevangelista/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
          </a>
          </div>

          <div>
          <a href="https://github.com/zshuaeva" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
          </div>

          <NavLink to="/contact" className="contact-button-text">
          <Button className="contact-button" colorScheme='purple' >
           Contact
           </Button>
          </NavLink>


      </div>
    </div>
  );
}

export default Footer;
