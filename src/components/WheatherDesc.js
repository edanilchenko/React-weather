import React from "react";

function WheatherDesc({weathercode = 0}){
    var desc = 'Sun';
    if(weathercode > 86){
        desc = 'Thunder';
    } else if(weathercode > 77) {
        desc = 'Rain';
    } else if(weathercode > 67) {
        desc = 'Snow';
    } else if(weathercode > 57) {
        desc = 'Rain';
    } else if(weathercode > 3) {
        desc = 'Fog';
    } else if(weathercode > 0) {
        desc = 'Cloud';
    }

    return (
        <>{desc}</>
    );
}

export default WheatherDesc;