import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import Homepic from '../images/homepicture.jpg';
import '../styles/Homepage.css';

const Homepage = () => {
return (
  <Container>
    <img src= {Homepic} className="homepic"/>
    <h2 className="welcome">Welcome!</h2>
    <h3 className="explore">Explore with Us! </h3>
    <p className="hometext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Proin quis aliquet sapien. Donec velit lacus, mollis eu…
    </p>
</Container>
);
}

export default Homepage; 