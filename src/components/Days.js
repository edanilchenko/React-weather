import React, {useState} from "react"
import WheatherDesc from "./WheatherDesc";
import WheatherIcon from "./WheatherIcon";

import dateFormat from "dateformat";

function Days({daily, selected_date, set_date = f => f}) {
    if(selected_date === ''){
        set_date(daily.time[0]);
    }
    return (
        <section class="days">
            <div class="title">По дням</div>
            <div class="list">
                {daily.time.map((e, i) => (
                    <div className={(selected_date === e) ? 'item selected' : 'item' } key={i} onClick={ () => { set_date(e) } } >
                        <div class="day">{dateFormat(new Date(e), 'ddd d')}</div>
                        <div class="icon">
                            <WheatherIcon weathercode={daily.weathercode[i]} />
                        </div>
                        <div class="temperature">
                            <span class="max">
                                {Math.round(daily.temperature_2m_max[i])}°
                            </span>
                            <span class="min">
                                {Math.round(daily.temperature_2m_min[i])}°
                            </span>
                        </div>
                        <div class="description">
                            <WheatherDesc weathercode={daily.weathercode[i]} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Days;