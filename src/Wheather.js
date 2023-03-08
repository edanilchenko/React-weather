import React, {useState, useEffect} from "react"

import Main from "./components/Main"
import Days from "./components/Days"
import Hours from "./components/Hours"
import Details from "./components/Details"

function Wheather() {
    const [apiData, setApiData] = useState('');
   
    useEffect(() => {
        fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=48.47&longitude=35.04&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FBerlin'
        ).then((response) => {
            return response.json();
        })
        .then(setApiData)
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
            <Days daily={apiData.daily} />
            <Hours/>
            <Details/>
        </>
    );
}

export default Wheather;