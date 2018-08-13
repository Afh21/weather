import React from 'react';
import PropTypes from 'prop-types';
import './WeatherLocation/WeatherData/style.css';

const Location = (props) => {    
    const { city } = props;  // const {city} = props; Pq es propio del lenguaje (Destructuring)  ;
    return (<div className="LocationCont"> <h1> { city } </h1> </div>);
}

// Validacion de propiedades
Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;


/*  
    Destructuring Object - Investigar

    const obj = {
        prop1: "uno",
        prop2: "dos"
    }

    const { prop1, prop2 } = obj:
*/