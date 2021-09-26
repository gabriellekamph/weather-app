import React, { useEffect, useState } from 'react';
import WeatherToday from './components/WeatherToday';
import WeatherList from './components/WeatherList';
import './components/styles.css';
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [today, setToday] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // Fetch for current day only from OpenWeatherMap API

      fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
          setToday(result)
          console.log(result);
      });

      // Fetch for 5 days forecast from OpenWeatherMap API

      fetch(`${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&cnt=5&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
          setForecast(result)
          console.log(result);
      });

    }
    fetchData();
  }, [lat, long])

  return (
    <div className="App">
      {(typeof today.main != 'undefined') ? (
        <>
        <WeatherToday weatherData={today} />
        <WeatherList weathers={forecast} />
        </>
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}

export default App;