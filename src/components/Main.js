import React, { useState } from "react"

import WheatherIcon from "./WheatherIcon";
import WheatherDesc from "./WheatherDesc";

function Main({current_weather}){
    return (
        <section class="main">
            <div className="location">
                Dnipro
            </div>
            <div className="temperature-block">
                <div className="icon">
                    <WheatherIcon weathercode={current_weather.weathercode} />
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
                <WheatherDesc weathercode={current_weather.weathercode} />
                <div className="last-update">Обновлено в 17:51</div>
            </div>
            <div className="details-block">
                <div className="details-row">
                    <span className="details-item">По ощущениям -5°</span>
                    <span className="details-item">
                        Ветер {Math.round(current_weather.windspeed)} м/с
                    </span>
                    <span className="details-item">Видимость 5 км</span>
                </div>
                <div className="details-row">
                    <span className="details-item">Давление 768,00 мм</span>
                    <span className="details-item">Влажность 90%</span>
                    <span className="details-item">Точка росы -2°</span>
                </div>
            </div>
        </section>
    );
}

export default Main;