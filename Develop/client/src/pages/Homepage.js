import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Upside from "../images/copy.jpeg";
import Homepic from "../images/universee.jpeg";
import GalaxyNasa from "../images/galaxyNasa.jpeg";
import Universe from "../images/universee.jpeg";
import Background from "../images/background2.jpeg";
import NavBar from "../images/navBar.webp";
import Moon from "../images/moon.svg";
import Star from "../images/star.svg";
import HomeCard from "../components/Card";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="celestialCosmicBackGround">
      <Container>
        <h2 className="welcome"> Welcome! </h2>
        <h3 className="explore"> Explore with Us! </h3>
        <p className="hometext">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
          aliquet sapien. Donec velit lacus, mollis eu…
        </p>
        <div className="row d-flex"> 
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
        </div>
      </Container>

      <Button className="donateButton" variant="outline-dark" size="lg">
        DONATE
      </Button>
    </div>
  );
};
{
  /* <Container className="cardContainer d-flex justify-content-between"></Container> */
}
export default Homepage;
