import React from "react";

import { get_weather_by_code } from "../functions.js"

function WeatherDesc({weathercode = 0}){
    var desc = get_weather_by_code(weathercode);
    desc = desc[0].toUpperCase() + desc.slice(1);

    return (
        <>{desc}</>
    );
}

export default WeatherDesc;