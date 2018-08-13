import React from 'react';
import WeatherIcon from 'react-icons-weather';
import PropTypes from 'prop-types';
import './style.css';

// Tip: Cuando por una funcion se recibe 1 solo parametro, se pueden omitir los parentesis.
// esto es propio por el lenguaje ES6, Convencion.

// return (<WeatherIcons className="wicon" name={setIconName(weatherState)} size="4x" />)

const WeatherTemperature = ({temperature, icon}) => {            
    return (   
        <div className='weatherTemperatureCont'> 
            <WeatherIcon name="owm" iconId={ icon } style={{ fontSize: 50 }} /> <span className="temperature"> {`${temperature} C` } </span> 
        </div> 
    );        
};

// Con propTypes validamos las propiedades que necesitemos validar y el tipo (numerica, string).
// como es aqui donde llegan
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    icon: PropTypes.string 
}

export default WeatherTemperature;
