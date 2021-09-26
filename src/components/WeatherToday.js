import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button, Icon } from 'semantic-ui-react';

// Refresh button to update to current data

const refresh = () => {
    window.location.reload();
}

// Card to display current weather based on user location

const WeatherToday = ({weatherData}) => (

    <div className="today">
        <div className="top">
            <p className="header"><Icon name="map marker alternate" /> {weatherData.name}</p>
            <Button className="button" inverted color="vk" circular icon='refresh' onClick={refresh} />
        </div>

        <div className="flex">
            <p className="current-day">{moment().format('dddd')}, <span>{moment().format('LL')}</span>
            <br /> {moment().format('HH:mm')}</p>
           <p className="temp"><Icon name="thermometer" /> <br />{weatherData.main.temp} &deg;C</p>
        </div>

        <div className="flex">
            <p className="description">
                Right now: {weatherData.weather[0].description}
            </p>
        </div>

        <div className="flex">
            <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('sv-SE')}</p>
            <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('sv-SE')}</p>
        </div>
    </div>
)

export default WeatherToday;