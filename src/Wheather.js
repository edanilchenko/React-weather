import React, {useState, useEffect} from "react"

import Main from "./components/Main"
import Days from "./components/Days"
import Hours from "./components/Hours"
import Details from "./components/Details"

function Wheather() {
    const [apiData, setApiData] = useState('');
    const [selectedDate, setDate] = useState('');
   
    useEffect(() => {
        fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=48.47&longitude=35.04&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin'
        ).then((response) => {
            return response.json();
        })
        .then((json) => {
            setApiData(json);
        })
        .catch((e) => {
            console.log(e);
        });

        console.log(123);
    }, []);

    if(apiData === ''){
        return <div>No data</div>
    }

    return (
        <>
            <Main current_weather={apiData.current_weather} />
            <Days daily={apiData.daily} selected_date={selectedDate} set_date={setDate} />
            <Hours hourly={apiData.hourly} selected_date={selectedDate} />
            <Details daily={apiData.daily} selected_date={selectedDate} />
        </>
    );
}

export default Wheather;