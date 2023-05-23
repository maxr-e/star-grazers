import React, { useState, useEffect } from 'react';
import {
  Container
} from 'react-bootstrap';
import Homepic from '../images/homepicture.jpg';
import Moon from '../images/moon.svg';
import Star from '../images/star.svg';
import HomeCard from '../components/Card';
import '../styles/Homepage.css';


const Homepage = () => {
return (
  <div>
  <Container>
    <img src= {Homepic} className="homepic" alt="home pic"/>
    <h2 className="welcome">Welcome!</h2>
    <h3 className="explore">Explore with Us! </h3>
    <p className="hometext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Proin quis aliquet sapien. Donec velit lacus, mollis eu…
    </p>
  </Container>
  <Container className="cardContainer d-flex justify-content-between">
  <HomeCard
  title="Star Search"
  description="Search for details about stars!"
  link="/search"
  icon={Star}
  />
  <HomeCard
  title="Moon Phases"
  description="Use your location to see moonphases!"
  link="/moonphases"
  icon={Moon}
  />
  <HomeCard
  title="Star Charts"
  description="Use your location to see constellations!"
  link="/starcharts"
  icon={Star}
  />
  </Container>
  </div>
);
}

export default Homepage; 