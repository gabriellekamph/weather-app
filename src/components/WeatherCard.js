import React from 'react';
import './styles.css';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    const date = new Date(dt);
    return (
        <div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /><br />

            <p>{main}</p>
            <p>Min: {temp_min}</p>
            <p>Max: {temp_max}</p>
            <p>{date.toLocaleDateString()}</p>

        </div>
    )
}







export default WeatherCard;