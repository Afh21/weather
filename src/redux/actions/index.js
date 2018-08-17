// ================ ACTIONS ================

import transformForecast from './../services/transformForcast';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const api_key = "fe68d1607c7047f951d177d05e251514";
const url     = `http://api.openweathermap.org/data/2.5/forecast`;


// actionCreator - Por destructuracion queda solo value, ya que estaba value: value
const setCity = value => ({ 
    type: 'SET_CITY', value 
});

const setForcastData = value => ({ 
    type: 'SET_FORECAST_DATA', value 
});


export const setSelectedCity = value => {
    
    // Esto retorna una funcion pura que recibe como parametro (dispatch)
    return dispatch => {

        const forecast = `${url}?q=${value}&appid=${api_key}`;
        
        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(value))


        return fetch(forecast)
                .then( data => (data.json()) )
                .then( weather_data => { 
                    const forecastData = transformForecast(weather_data);                    
                    dispatch( setForcastData({ city: value, forecastData }) );
                });        
    }
}

