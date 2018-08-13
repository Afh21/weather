import moment from 'moment';
import trasnformWeather from './transformWeather';

// Lo que se pretende al retornar un  objeto vacío ({}) es que simplemente le de estado a un objeto en ForecastExtended, ver Component.
const transformForecast = data => (
    data.list.filter( item => (
        moment(item.dt_txt).hour() === 6 ||
        moment(item.dt_txt).hour() === 12 || 
        moment(item.dt_txt).hour() === 18
    )).map( item => (
        // Retornará un objeto, por lo que se pone { }
        {
            weekDay: moment(item.dt_txt).format('dddd'),
            hour: moment(item.dt_txt).hour(),
            data: trasnformWeather(item)   // Importamos desde el service de trasnformWeather
        }
    ))
);

export default transformForecast;