import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherList = ({weathers}) => {
    const array = weathers;
    let newArray = array.list;
    console.log(newArray)
    

    return (
        <div className="week">
            <p className="next-five">
                Next 5 days..
            </p>

            {newArray.map(({dt, main, weather}) => (
                <div key={dt}>
                    <WeatherCard
                        temp_max={main.temp_max} 
                        temp_min={main.temp_min} 
                        dt={dt * 1000} 
                        main={weather[0].main} 
                        icon={weather[0].icon} 
                    />
                </div>
            ))}
        </div>
    )
}

export default WeatherList;