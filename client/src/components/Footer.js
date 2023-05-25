import React from 'react';
import Github from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'
import Stack from '../images/stack.svg'
import '../styles/Footer.css';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid className="footerbackground">
        <h1 className="contact d-flex justify-content-center">Contact Us </h1>
        <div className="footer d-flex justify-content-center">
        <a className="footericon " target="blank" href="https://github.com/maxr-e/star-grazers">
        <img src= {Github} className="icon"/></a> 

        <a className="footericon" target="blank" href="https://www.linkedin.com/">
        <img src= {LinkedIn} className="icon"/></a>  
        
        <a className="footericon" target="blank" href="">
        <img src= {Stack} className="icon"/></a>  
        </div> 
        </Container>
  );
  }

  export default Footer;