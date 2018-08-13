import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import { Spin } from 'antd';
import transformForecast from '../services/transformForcast';

/*
const days = [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes' ]
const data = { temperature: 12.65, humidity: 10, icon: "800", wind: `${10} mt/s` }
*/

const api_key      = "fe68d1607c7047f951d177d05e251514";
const url          = `http://api.openweathermap.org/data/2.5/forecast`;

class ForecastExtended extends Component {

    constructor() {
        super();

        this.state = {
            forecastData: null
        }
    }


    componentDidMount() {        
        // fetch or axios   
        this.updateCity(this.props.city);
    }
    
    /* Hook: componentWillReceiveProps
        Se ejecuta cada vez que hay un actualizacion de las propiedades.
        nextProps es propio del método componentWillReceiveProps
        se ejecuta siempre excepto la primer vez, para eso está el componentDidMount
    */
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city) {
            this.setState({ forecastData: null}) // Logramos aparecer el indicador de carga (Spinner)            
            this.updateCity(nextProps.city);
        }
    }
    

    updateCity = city => {

        const forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(forecast).then(
            data => (data.json())
        ).then( 
            weather_data => { 

                // transformForecast es una funcion creada en la carpeta /services 
                const forecastData = transformForecast(weather_data);
                // console.log(forecastData);  // Trasnformacion realizada de lso datos en el services.
                this.setState({ forecastData })
            }

        )
    }
    

    renderForecastItemDays(forecastData) {
        // return "Render Items";
        return forecastData.map( 
            forecast => (
                <ForecastItem 
                    weekDay={ forecast.weekDay } 
                    key={`${forecast.weekDay}${forecast.hour}`} 
                    data={forecast.data}
                    hour={forecast.hour}>
                    
                </ForecastItem>) 
        );        
    }

    renderProgress() {
        return <Spin size="large" />
    }

  render() {
        const { city }          = this.props;
        const { forecastData }  = this.state;
        
    return (
      <div>    
          <h3> Clima Extendido { city }  </h3>  
          { forecastData? this.renderForecastItemDays(forecastData) : this.renderProgress() }          
      </div>
    )
  }
}

// Validando el/los parametro(s)
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;