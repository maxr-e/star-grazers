import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import MoonPhaseComponent from './Moon';

// const authString = btoa(`${applicationId}:146c54f0-5929-4f35-a19e-5cfd9c15b939${applicationSecret}8d648ac5f5c4da1dafa6310b3cba5931687cc66f9734aa5061785fe26c8bff8c6f93e713ed140bf06057718ef6d06ed5e7073fbfedfbfbf08d3af5d6364e3e697bebad0e5f09924c67f0ebab5bc7ae2cefe210a2b2e7b017166bd574ff1c0fff8ad244bdcce79a47a3b2e3641d184d99`);

const MoonPhases = () => {
return (
  <Container>
  <form className="form">
        <p className="inputTitle">Longitude:</p>
        <input className="inputs"
          //value={longitude}
          //name="longitude"
          //onChange={handleInputChange}
          type="text"
        />
  </form>
</Container>
);
}

export default MoonPhases; 