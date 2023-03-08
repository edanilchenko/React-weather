import React from "react"
import WheatherDesc from "./WheatherDesc";
import WheatherIcon from "./WheatherIcon";

import AliceCarousel from 'react-alice-carousel';

import dateFormat from "dateformat";

function Hours({hourly, selected_date}) {
    var selected_hours = hourly.time.map(
        (time, i) => ({time, i})
    ).filter((e) => {
        return new Date(e.time).getDate() === new Date(selected_date).getDate()
    });

    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 6
        },
        1024: {
            items: 12, 
            itemsFit: 'contain'
        },
    };

    return (
        <section class="hours">
            <div class="title">По часам</div>
            <div class="list">
                <AliceCarousel mouseTracking responsive={responsive} disableDotsControls="true">
                    { selected_hours.map((e) => (
                        <div class="item">
                            <div class="content">
                                <div class="icon">
                                    <WheatherIcon weathercode={hourly.weathercode[e.i]} />
                                </div>
                                <div class="temperature">
                                    {Math.round(hourly.temperature_2m[e.i])}°
                                </div>
                                <div class="description">
                                    <WheatherDesc weathercode={hourly.weathercode[e.i]} />
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