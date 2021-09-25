import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';

const WeatherCard = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
            <br />
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Right now: {weatherData.weather[0].description}</p>
        </Card.Content>
    </Card>
)

export default WeatherCard;