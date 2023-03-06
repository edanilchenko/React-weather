import React from "react"
import { createRoot } from "react-dom/client"

function Main(){
    return (
        <>
            <div className="location">Dnipro</div>
            <div className="temperature-block">
                <div className="icon">
                    <img src="./icons/cloud.svg" alt=""/>
                </div>
                <div className="value">
                    <span className="digit">8</span>
                    <span className="grad">°</span>
                </div>
                <div className="units">
                    <div className="active">C</div>
                    <div className="unit">F</div>
                </div>
            </div>
            <div className="description-block">
                Облачно
                <div className="last-update">Обновлено в 17:51</div>
            </div>
            <div className="details-block">
                <div className="details-row">
                    <span className="details-item">По ощущениям -5°</span>
                    <span className="details-item">Ветер 3 м/с</span>
                    <span className="details-item">Видимость 5 км</span>
                </div>
                <div className="details-row">
                    <span className="details-item">Давление 768,00 мм</span>
                    <span className="details-item">Влажность 90%</span>
                    <span className="details-item">Точка росы -2°</span>
                </div>
            </div>
        </>
    );
}

const container = document.getElementById('react-main');
const root = createRoot(container);
root.render(<Main/>);