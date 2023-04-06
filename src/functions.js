export const get_weather_by_code = function(weathercode) {
    var weather = 'sun';
    if(weathercode > 86){
        weather = 'thunder';
    } else if(weathercode > 77) {
        weather = 'rain';
    } else if(weathercode > 67) {
        weather = 'snow';
    } else if(weathercode > 57) {
        weather = 'rain';
    } else if(weathercode > 3) {
        weather = 'fog';
    } else if(weathercode > 1) {
        weather = 'cloud';
    }

    return weather;
}

export const get_direction_by_degrees = function(degrees) {
    var directions = [
        'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'
    ];

    degrees = Math.round((degrees + 11.25) / 22.5 - 0.02);
    
    return directions[(degrees % 16)];
}