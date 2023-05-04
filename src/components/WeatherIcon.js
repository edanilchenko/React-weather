import React from "react"

import { get_weather_by_code } from "../functions.js"

function WeatherIcon({weathercode = 0}){
    var icon = get_weather_by_code(weathercode);

    icon = './icons/' + icon + '.svg'; 
    return (
        <img src={icon} alt={weathercode} />
    );
}

export default WeatherIcon;