import React from 'react';
import CruiseControl from './cruisecontrol.png';
import './Projects.css';
import overrated from './overrated.png';
import clonebnb from './clonebnb.png';
import js from './javascript.png';
import dj from './django.ico';
import sql from './sql.ico';
import css from './css.png';
import py from './python.png';
import react from './React.ico';
import docker from './docker.ico';
import postgres from './postgres.ico';
import html from './html.ico';
import { Tooltip } from 'react-tooltip';
import { useColorMode } from '@chakra-ui/react';
import styles from './Projects.css';

function Projects() {
  const { colorMode } = useColorMode();
  const textClass = colorMode === 'dark' ? styles.darkText : styles.lightText;

  const myProjects = [
    {
      name: 'Clone BnB',
      description:
        'Clone BnB is a personal project designed to link homeowners and short-term vacation renters. Developed under a rigorous two-day deadline, the project successfully achieved a minimum viable product. The system architecture features models adept at handling foreign keys, crucial for creating rental properties and amenities. Leveraging the Django backend, it incorporates a user authentication system that facilitates user sign up and login processes.',
      img: clonebnb,
      stack: [
        [react, 'React.js'],
        [js, 'Javascript'],
        [py, 'Python'],
        [dj, 'Django'],
        [css, 'CSS'],
        [html, 'HTML5'],
        [docker, 'Docker'],
        [sql, 'SQLite3'],
      ],
      url: 'https://github.com/zshuaeva/-Clonebnb',
    },
    {
      name: 'Cruise Control',
      description:
        'Revolutionize your vehicle service business with an all-in-one, cutting-edge software solution designed specifically for the vehicle service industry. Empower your business to grow by automating tedious tasks, streamlining workflows, and enhancing customer satisfaction.',
      img: CruiseControl,
      stack: [
        [react, 'React.js'],
        [js, 'Javascript'],
        [py, 'Python'],
        [css, 'CSS'],
        [html, 'HTML5'],
        [docker, 'Docker'],
        [postgres, 'PostgreSQL'],
      ],
      url: 'https://github.com/zshuaeva/CruiseControl',
    },
    {
      name: 'Overrated Online',
      description:
        'Delve into our innovative digital card game, a modern take on beloved classics like Cards Against Humanity. Unleash your creativity as you pair review cards with destinations, crafting hilariously unexpected combinations. What makes us unique is the option to select from a wide range of existing cards or design your own custom ones, making each round a truly personalized experience.',
      img: overrated,
      stack: [
        [react, 'React.js'],
        [js, 'Javascript'],
        [py, 'Python'],
        [dj, 'Django'],
        [css, 'CSS'],
        [html, 'HTML5'],
        [docker, 'Docker'],
        [postgres, 'PostgresSQL'],
      ],
      url: 'https://github.com/zshuaeva/overratedonline',
    },
  ];

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
      data-interval="10000"
    >
      <ol className="carousel-indicators">
        {myProjects.map((project, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              className="carousel-photo"
              src={project.img}
              alt={`Slide ${index}`}
            />
            <div className="carousel-caption">
              <h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <p className={textClass}>{project.description}</p>
              <div className="stack-container">
                {project.stack &&
                  project.stack.map((image, imageIndex) => (
                    <>
                      <img
                        className="stack-icon"
                        key={imageIndex}
                        src={image[0]}
                        alt={`Stack ${imageIndex}`}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={image[1]}
                      />
                      <Tooltip id="my-tooltip" />
                    </>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Projects;
