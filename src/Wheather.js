import React, {useState, useEffect} from "react"

import Main from "./components/Main"
import Days from "./components/Days"
import Hours from "./components/Hours"
import Details from "./components/Details"

import { get_weather_by_code } from "./functions.js"

import { Parallax } from 'react-parallax';
import City from "./components/City"

function Wheather() {
    const [city, setCity] = useState({name: 'Dnipro', value: '48.47_35.04'});
    const [apiData, setApiData] = useState('');
    const [selectedDate, setDate] = useState('');
   
    useEffect(() => {
        const [latitude, longitude] = city.value.split('_'); 
        fetch(
            'https://api.open-meteo.com/v1/forecast' +
            `?latitude=${latitude}` +
            `&longitude=${longitude}` +
            '&hourly=temperature_2m,weathercode' +
            '&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset' +
            '&current_weather=true' +
            '&timezone=Europe%2FBerlin' +
            '&forecast_days=14'
        ).then((response) => {
            return response.json();
        })
        .then((json) => {
            setApiData(json);
        })
        .catch((e) => {
            console.log(e);
        });
    }, [city]);

    if(apiData === ''){
        return <div>No data</div>
    }

    var bg_image = get_weather_by_code(apiData.current_weather.weathercode);
    bg_image = `wallpapers/${bg_image}.jpg`;

    return (
        <Parallax bgImage={bg_image} strength={400}>
            <div className="container">
                <City city={city} set_city={setCity} />
                <Main current_weather={apiData.current_weather} />
                <Days daily={apiData.daily} selected_date={selectedDate} set_date={setDate} />
                <Hours hourly={apiData.hourly} selected_date={selectedDate} />
            </div>
        </Parallax>
    );
}

export default Wheather;