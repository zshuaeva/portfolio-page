import React from 'react';
import stryker from './stryker.png';
import logo from './LogoLarge.png';
import CruiseControl from './cruisecontrol.png';
import './Projects.css';
import overrated from './overrated.png'
import clonebnb from './clonebnb.png'
import js from './javascript.ico'
import dj from './django.ico'
import sql from './sql.ico'
import css from './css.png'
import py from './python.png'
import react from './React.ico'
import docker from './docker.ico'
import postgres from './postgres.ico'

function Projects() {
    const myProjects = [
        {
            name: "Clone b&b",
            description: "Clone BnB is a personal project designed to link homeowners and short-term vacation renters. Developed under a rigorous two-day deadline, the project successfully achieved a minimum viable product. The system architecture features models adept at handling foreign keys, crucial for creating rental properties and amenities. Leveraging the Django backend, it incorporates a user authentication system that facilitates user sign up and login processes.",
            img: clonebnb,
            stack: [react, py, dj, css, docker, sql, js],
            url: 'https://github.com/zshuaeva/-Clonebnb'
        },
        {
            name: "Cruise Control",
            description: "CruiseControl is an all-in-one, cutting-edge, software solution designed specifically for the vehicle service industry. description content goes here description content goes here description content goes here description content goes here description content goes here description content goes here description content goes here ",
            img: CruiseControl,
            stack: [react, py, dj, css, docker, postgres, js],
            url: 'https://github.com/zshuaeva/CruiseControl'
        },
        {
            name: "Overrated Online",
            description: "Delve into our innovative digital card game, a modern take on beloved classics like Cards Against Humanity. Unleash your creativity as you pair review cards with destinations, crafting hilariously unexpected combinations. What makes us unique is the option to select from a wide range of existing cards or design your own custom ones, making each round a truly personalized experience.",
            img: overrated,
            stack: [js, py, docker, dj, postgres, react],
            url: 'https://github.com/zshuaeva/overratedonline'
        }
    ];

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="10000">
            <ol className="carousel-indicators">
                {myProjects.map((project, index) => (
                    <li
                        key={index}
                        data-target="#carouselExampleIndicators"
                        data-slide-to={index}
                        className={index === 0 ? "active" : ""}
                    ></li>
                ))}
            </ol>
            <div className="carousel-inner">
                {myProjects.map((project, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img className="carousel-photo" src={project.img} alt={`Slide ${index}`} />
                        <div className="carousel-caption">
                            <h3>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                </a>
                            </h3>
                            <p>{project.description}</p>
                            <div className="stack-container">
                                {project.stack && project.stack.map((image, imageIndex) => (
                                    <img key={imageIndex} src={image} alt={`Stack ${imageIndex}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Projects;
