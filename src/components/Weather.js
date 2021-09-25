import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';

// Card to display current weather based on user location

const WeatherCard = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">City: {weatherData.name}</Card.Header>
            <p>Temperature: {weatherData.main.temp} &deg;C</p>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('sv-SE')}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('sv-SE')}</p>
            <p>Right now: {weatherData.weather[0].description}</p>
        </Card.Content>
    </Card>
)

export default WeatherCard;