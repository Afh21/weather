import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from '../Location';
import WeatherData from './WeatherData';
import './WeatherData/style.css';

import transformWeather from '../../services/transformWeather';

import { Spin,  Icon } from 'antd';

const api_key = "fe68d1607c7047f951d177d05e251514";

// Este objeto se pasa a WeatherData para renderizar la informacion
/* const data = {
    temperature: 20,
    weatherState: 'cloudy',
    humidity: 30,
    wind: '5 m/s'
}; */

// La funciona que renderiza es | render = () => { }
class WeatherLocation extends Component {

    // city llega como string y está asi { city } por destructuring
    constructor({ city }) {        
        super();
        this.state = {
            city,
            data: null
        };
    }

    // Apenas va a renderizar se ejecuta este hook
    componentWillMount = () => { 

        const { city } = this.state;
        const url_apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        
        fetch(url_apiWeather).then( data => {                        
            return  data.json();
        }).then( weather_data => {               
            const data = transformWeather(weather_data); //transformWeather es una funcion creada e importada en el services.
            this.setState({ data })  // Esto era asi: this.setState({ data: data}), pero por destructuring ES6 se simplifica.                                    
        });
        
        // Actualiza el estado de los datos .setState()
        // this.setState({ data: data2 });         
    };
    

    render = () => {
        
        const { city, data } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
        const { weatherLocationClick } = this.props; // Llega por parámetro

    return (
        <div className="weatherLocation" onClick={ weatherLocationClick }> 
            <Location city={city} /> 
            { data ? <WeatherData data={ data } /> : <Spin indicator={antIcon} /> }              
        </div>
        )        
    };
}

// Validando propiedades
WeatherLocation.propTypes = {
    city: PropTypes.string,
    weatherLocationClick: PropTypes.func
}

export default WeatherLocation;

