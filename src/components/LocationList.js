import React from 'react'
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {        
        onSelectedLocation(city); 
    };

    // Renderiza sobre la iteracción del array pasado a través de .map() 
    const strComponent = cities => (
        cities.map( (city, index) => 
            (<WeatherLocation weatherLocationClick={ () => handleWeatherLocationClick(city) } key={ index } city={ city } />)
        )
    );
    
    return (
        <div> { strComponent(cities) } </div>
    );

};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;