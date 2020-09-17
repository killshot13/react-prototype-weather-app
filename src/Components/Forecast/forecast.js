import React, { useState } from 'react';

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Seattle", {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "3e44dc2115msh9f58984000eb72ep1841c7jsn62d782fb5106"
	    }
        })
        .then(response => response.json())
        .then(response => {
            setResponseObj(response);
        })
        .then(json => {
            console.log(json);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>Get Forecast</button>
        </div>
    )

}

export default Forecast;
