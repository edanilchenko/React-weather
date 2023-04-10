import React, { useState } from "react"

import SelectSearch from 'react-select-search';

function City({city, set_city = f => f}) {
    const cities = require('../cities.json');
    const options = cities.map(
        ({name, latitude, longitude}) => ({name, value: `${latitude}_${longitude}`})
    );
    const handler = (e, {name, value}) => set_city({name, value});
    return (
        <div className="location">
            <SelectSearch options={options} value={city.value} onChange={handler} search="true" />
        </div>
    );
}

export default City;