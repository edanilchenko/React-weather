import React from "react"
import dateFormat from "dateformat";

import Donut from './Donut';

import { get_weather_by_code, get_weather_desc } from "../functions.js"

function Details({daily, selected_date}) {
    const selected_day_id = daily.time.indexOf(selected_date);

    const weather_desc = `${get_weather_desc(
        get_weather_by_code(
            daily.weathercode[selected_day_id]
        )
    )}.`;
    const temperature_desc = `The maximum temperature will be ${
        Math.round(daily.temperature_2m_max[selected_day_id])
    }°C, the minimum ${
        Math.round(daily.temperature_2m_min[selected_day_id])
    }°C.`;

    const sunrise = dateFormat(
        Date.parse(
            daily.sunrise[selected_day_id]
        ),
        'HH:MM'
    );
    const sunset = dateFormat(
        Date.parse(
            daily.sunset[selected_day_id]
        ),
        'HH:MM'
    );

    const uv_index_max = daily.uv_index_max[selected_day_id];
    const apparent_temperature_max = daily.apparent_temperature_max[selected_day_id];
    const apparent_temperature_min = daily.apparent_temperature_min[selected_day_id];
    const precipitation_sum = daily.precipitation_sum[selected_day_id];
    const precipitation_probability_max = daily.precipitation_probability_max[selected_day_id];
    const precipitation_hours = daily.precipitation_hours[selected_day_id];
    const shortwave_radiation_sum = daily.shortwave_radiation_sum[selected_day_id];

    return (
        <section class="details">
            <div class="title">Details</div>
            <div class="details-blocks list">
                <div class="details-description-block item">
                    <p>
                        <div class="title">Description</div>
                        <div class="text">
                            {weather_desc}
                        </div>
                        <div class="text">
                            {temperature_desc}
                        </div>
                    </p>
                </div>
                <div class="details-sunrise-block item">
                    <p>
                        <div class="title">Sunrise</div>
                        <div class="value">
                            <img src="./icons/sun-up.svg" alt="" class="icon"/>
                            <span class="time">{sunrise}</span>
                        </div>
                    </p>
                    <p>
                        <div class="title">Sunset</div>
                        <div class="value">
                            <img src="./icons/sun-down.svg" alt="" class="icon"/>
                            <span class="time">{sunset}</span>
                        </div>
                    </p>
                </div>
                {precipitation_probability_max !== null && 
                (<div class="item">
                    <div class="diagrams">
                        <Donut title="Precipitation probability" persentage={precipitation_probability_max} />
                    </div>
                </div>)
                }
            </div>
        </section>
    );
}

export default Details;