import React from "react";
import { Card, Button } from 'react-bootstrap';

function HomeCard(props) {
    return (
      <Card className="homeCard">
        <Card.Body>
        <h2 className="cardTitle mt-3 mb-3">{props.title}<img src={props.icon} className="icon" alt="icon"/></h2>
          <Card.Text className="cardText">
            {props.description}
          </Card.Text>
          <Button className="mt-3 mb-3" href={props.link}>
            {"View"}
          </Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default HomeCard;