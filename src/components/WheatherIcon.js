import React from "react"

function WheatherIcon({weathercode = 0}){
    var icon = 'sun';
    if(weathercode > 86){
        icon = 'thunder';
    } else if(weathercode > 77) {
        icon = 'rain';
    } else if(weathercode > 67) {
        icon = 'snow';
    } else if(weathercode > 57) {
        icon = 'rain';
    } else if(weathercode > 3) {
        icon = 'fog';
    } else if(weathercode > 0) {
        icon = 'cloud';
    }

    icon = './icons/' + icon + '.svg'; 
    return (
        <img src={icon} alt={weathercode} />
    );
}

export default WheatherIcon;