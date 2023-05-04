import React, { useState } from "react"

import WeatherIcon from "./WeatherIcon";
import WeatherDesc from "./WeatherDesc";

import { get_direction_by_degrees } from "../functions"

import dateFormat from "dateformat";

function Main({current_weather}){
    var wind_speed = Math.round(current_weather.windspeed);
    var wind_direction = get_direction_by_degrees(current_weather.winddirection);
    var update_time = dateFormat(new Date(current_weather.time), 'HH:MM')
    return (
        <section class="main">
            <div className="temperature-block">
                <div className="icon">
                    <WeatherIcon weathercode={current_weather.weathercode} />
                </div>
                <div className="value">
                    <span className="digit">
                        {Math.round(current_weather.temperature)}
                    </span>
                    <span className="grad">°</span>
                </div>
                <div className="units">
                    <div className="active">C</div>
                </div>
            </div>
            <div className="description-block">
                <WeatherDesc weathercode={current_weather.weathercode} />
                <div className="last-update">Updated at {update_time}</div>
            </div>
            <div className="details-block">
                <div className="details-row">
                    <span className="details-item">
                        Wind {wind_direction} {wind_speed} m/s
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Main;