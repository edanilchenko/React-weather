import React from "react"
import WeatherDesc from "./WeatherDesc";
import WeatherIcon from "./WeatherIcon";

import AliceCarousel from 'react-alice-carousel';
import * as responsive from '../responsive.json';

import dateFormat from "dateformat";

function Hours({hourly, selected_date}) {
    const selected_hours = hourly.time.map(
        (time, i) => ({time, i})
    ).filter((e) => {
        return new Date(e.time).getDate() === new Date(selected_date).getDate()
    });

    return (
        <section class="hours">
            <div class="title">Hourly</div>
            <div class="list">
                <AliceCarousel mouseTracking responsive={responsive} disableDotsControls="true">
                    { selected_hours.map((e) => (
                        <div class="item">
                            <div class="content">
                                <div class="icon">
                                    <WeatherIcon weathercode={hourly.weathercode[e.i]} />
                                </div>
                                <div class="temperature">
                                    {Math.round(hourly.temperature_2m[e.i])}°
                                </div>
                                <div class="description">
                                    <WeatherDesc weathercode={hourly.weathercode[e.i]} />
                                </div>
                            </div>
                            <div class="time">
                                {dateFormat(new Date(e.time), 'HH:MM')}
                            </div>
                        </div>
                    )) }
                </AliceCarousel>
            </div>
        </section>
    );
}

export default Hours;