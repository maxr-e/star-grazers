import React, { useState } from "react";
import {
  Container,
} from 'react-bootstrap';

import '../styles/MoonPhases.css';

function StarCharts() {
  const [starImage, setStarImage] = useState(null);
  // const applicationId = "146c54f0-5929-4f35-a19e-5cfd9c15b939";
  // const applicationSecret = "8d648ac5f5c4da1dafa6310b3cba5931687cc66f9734aa5061785fe26c8bff8c6f93e713ed140bf06057718ef6d06ed5e7073fbfedfbfbf08d3af5d6364e3e697bebad0e5f09924c67f0ebab5bc7ae2cefe210a2b2e7b017166bd574ff1c0fff8ad244bdcce79a47a3b2e3641d184d99";
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [date, setDate] = useState('');
  const [starType, setStarType] = useState('');
  const [constellation, setConstellation] = useState('');
  // const authString = btoa(`${applicationId}:${applicationSecret}`);
  // console.log(authString)
  const url = "https://api.astronomyapi.com/api/v2/studio/star-chart";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":
        "Basic MTQ2YzU0ZjAtNTkyOS00ZjM1LWExOWUtNWNmZDljMTViOTM5OjhkNjQ4YWM1ZjVjNGRhMWRhZmE2MzEwYjNjYmE1OTMxNjg3Y2M2NmY5NzM0YWE1MDYxNzg1ZmUyNmM4YmZmOGM2ZjkzZTcxM2VkMTQwYmYwNjA1NzcxOGVmNmQwNmVkNWU3MDczZmJmZWRmYmZiZjA4ZDNhZjVkNjM2NGUzZTY5N2JlYmFkMGU1ZjA5OTI0YzY3ZjBlYmFiNWJjN2FlMmNlZmUyMTBhMmIyZTdiMDE3MTY2YmQ1NzRmZjFjMGZmZjhhZDI0NGJkY2NlNzlhNDdhM2IyZTM2NDFkMTg0ZDk5",
    },
    body: JSON.stringify({
      style: "navy",
      observer: {
        date: date,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
      view: {
          type: starType,
          parameters: {
              constellation: constellation, // 3 letter constellation id
              position: {
                equatorial: {
                    rightAscension: 14.83,
                    declination: -15.23
                }
            },
            zoom: 5 //optional
          }
      }
  }),
  };
  
  const getStarCharts = async (event) => {

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setStarImage(result.data)
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };



    const handleLatitudeChange = (event) => {
      setLatitude(event.target.value);
    };
  
    const handleLongitudeChange = (event) => {
      setLongitude(event.target.value);
    };

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };

    const handleStarChange = (event) => {
      setStarType(event.target.value);
    };

    const handleConstellationChange = (event) => {
      setConstellation(event.target.value);
      console.log(constellation)
    };

  return (
    <div>
      <h1>Generate Star Chart</h1>
      <Container className="border border-secondary bg-dark">
      <form className="form">
        <p className="inputTitle">Longitude:</p>
        <input className="inputs form-control"
          value={longitude}
          name="longitude"
          onChange={handleLongitudeChange}
          type="number"
          placeholder="Longitude"
        />
        <br></br>
        <p class="inputTitle">Latitude:</p>
        <input class="inputs form-control"
          value={latitude}
          name="latitude"
          onChange={handleLatitudeChange}
          type="number"
          placeholder="Latitude"
        />
          <label className="dateBox" htmlFor="date">Date:</label>
          <input className="dateText"
            type="date"
            id="date"
            name="date"
            onChange={handleDateChange}
            required
          />
          <label htmlFor="dropdown" >Type:</label>
          <select id="dropdown" style={{ color: 'black' }}value={starType} onChange={handleStarChange}>
          <option value="">-- Select --</option>
          <option value="area">Area</option>
          <option value="constellation">Constellation</option>
          </select>
          <label htmlFor="dropdown" >Constellation:</label>
          <select id="dropdown" style={{ color: 'black' }}value={constellation} onChange={handleConstellationChange}>
          <option value="">-- Select --</option>
          <option value="ori">Orion</option>
          <option value="constellation">Constellation</option>
          </select>
          <button type="button" class="btn btn-secondary StarBtn" onClick={getStarCharts}>Generate Image</button>
        </form> 
        {starImage && <img src={starImage.imageUrl} alt="Star Chart" style={{ width: 800, height: 600 }}/>}
    </Container>
    </div>
  );
  }

export default StarCharts;




