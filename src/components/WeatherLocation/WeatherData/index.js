import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';
import PropTypes from 'prop-types';

const WeatherData = ({ data }) => {

    const { temperature, icon, humidity, wind } = data;
    
    return (
        <div className='weatherDataCont'>  
            <WeatherTemperature temperature={temperature} icon={icon} />
            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div> 
    );
};



// Shape es un tipo de validador de PropTypes y es para Objetos.
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
}

export default WeatherData;
