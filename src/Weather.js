import React, {useState, useEffect} from "react"

import Main from "./components/Main"
import Days from "./components/Days"
import Hours from "./components/Hours"
import Details from "./components/Details"

import { get_weather_by_code } from "./functions.js"

import { Parallax } from 'react-parallax';
import City from "./components/City"

function Weather() {
    const saved_city = JSON.parse(localStorage.getItem('city'));

    const [city, setCity] = useState(saved_city ? 
        saved_city : 
        {name: 'Dnipro', value: '48.47_35.04'}
    );
    const [apiData, setApiData] = useState('');
    const [selectedDate, setDate] = useState('');
   
    useEffect(() => {
        localStorage.setItem('city', JSON.stringify(city));
        const [latitude, longitude] = city.value.split('_'); 
        fetch(
            'https://api.open-meteo.com/v1/forecast' +
            `?latitude=${latitude}` +
            `&longitude=${longitude}` +
            '&hourly=temperature_2m,weathercode' +
            `&daily=${[
                'weathercode',
                'temperature_2m_max',
                'temperature_2m_min',
                'apparent_temperature_max',
                'apparent_temperature_min',
                'sunrise',
                'sunset',
                'uv_index_max',
                'uv_index_clear_sky_max',
                'precipitation_sum',
                'rain_sum',
                'showers_sum',
                'snowfall_sum',
                'precipitation_hours',
                'precipitation_probability_max',
                'windspeed_10m_max',
                'windgusts_10m_max',
                'winddirection_10m_dominant',
                'shortwave_radiation_sum',
                'et0_fao_evapotranspiration'
            ].join(',')}` +
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
        return <div className="loading-block">
            <img src="./icons/loading.gif"/>
        </div>
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
                <Details daily={apiData.daily} selected_date={selectedDate} />
            </div>
        </Parallax>
    );
}

export default Weather;