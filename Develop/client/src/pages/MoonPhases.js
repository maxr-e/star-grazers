import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

function MoonPhases() {
  const [moonImage, setMoonImage] = useState(null);
  // const applicationId = "146c54f0-5929-4f35-a19e-5cfd9c15b939";
  // const applicationSecret = "8d648ac5f5c4da1dafa6310b3cba5931687cc66f9734aa5061785fe26c8bff8c6f93e713ed140bf06057718ef6d06ed5e7073fbfedfbfbf08d3af5d6364e3e697bebad0e5f09924c67f0ebab5bc7ae2cefe210a2b2e7b017166bd574ff1c0fff8ad244bdcce79a47a3b2e3641d184d99";

  // const authString = btoa(`${applicationId}:${applicationSecret}`);
  // console.log(authString)
  const url = "https://api.astronomyapi.com/api/v2/studio/moon-phase";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":
        "Basic MTQ2YzU0ZjAtNTkyOS00ZjM1LWExOWUtNWNmZDljMTViOTM5OjhkNjQ4YWM1ZjVjNGRhMWRhZmE2MzEwYjNjYmE1OTMxNjg3Y2M2NmY5NzM0YWE1MDYxNzg1ZmUyNmM4YmZmOGM2ZjkzZTcxM2VkMTQwYmYwNjA1NzcxOGVmNmQwNmVkNWU3MDczZmJmZWRmYmZiZjA4ZDNhZjVkNjM2NGUzZTY5N2JlYmFkMGU1ZjA5OTI0YzY3ZjBlYmFiNWJjN2FlMmNlZmUyMTBhMmIyZTdiMDE3MTY2YmQ1NzRmZjFjMGZmZjhhZDI0NGJkY2NlNzlhNDdhM2IyZTM2NDFkMTg0ZDk5",
    },
    body: JSON.stringify({
      format: "png",
      observer: {
        date: "2020-11-01",
        latitude: 6.56774,
        longitude: 79.88956,
      },
      style: {
        backgroundColor: "red",
        backgroundStyle: "stars",
        headingColor: "white",
        moonStyle: "sketch",
        textColor: "red",
      },
      view: {
        type: "portrait-simple",
      },
    }),
  };

  useEffect(()=>{
    const getMoonPhases = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMoonImage(result.data)
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    getMoonPhases();
  },[]) 

  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const handleInputChange = (target) => {
    setLongitude(target.value);
    setLatitude(target.value);
  };

  const handleFormSubmit = () => {
  return (
    <div>      
      <Container>
        <p>hi!</p>
      {moonImage && <img src={moonImage.imageUrl} alt="moon phase"/>}    
      </Container>
    </div>
  )
  };

  return (
    <div>
      <h1>Generate Moon Phase</h1>
      <Container>
      <form className="form">
        <p class="inputTitle">Longitude:</p>
        <input class="inputs form-control"
          value={longitude}
          name="longitude"
          onChange={handleInputChange}
          type="number"
          placeholder="Longitude"
        />
        <br></br>
        <p class="inputTitle">Latitude:</p>
        <input class="inputs form-control"
          value={latitude}
          name="latitude"
          onChange={handleInputChange}
          type="number"
          placeholder="Latitude"
        />
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleInputChange}
            required
          />
          <button type="button" class="btn btn-dark" onClick={handleFormSubmit}>Generate Image</button>
        </form> 
        {moonImage && <img src={moonImage.imageUrl} alt="moon phase"/>} 
    </Container>
    </div>
  );
  }

export default MoonPhases;
