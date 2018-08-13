import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../../components/WeatherLocation/WeatherData/index';

const ForecastItem = ({ weekDay, hour, data }) => (
    <div> 
        { weekDay }: { hour } { hour > 12 ? 'pm ' : 'am'} 
        <WeatherData data={data}></WeatherData>
    </div>
);

ForecastItem.propType = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
}

export default ForecastItem;