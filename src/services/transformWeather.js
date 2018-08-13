import convert from 'convert-units';

const getTemp = kelvin =>  {
    return parseFloat(convert(kelvin).from('K').to('C').toFixed(2));
}

/*  const getWeatherState = (weather) => {
     const { iconId } = weather[0];  // weather[0] es lo que retorna la api, en la sección weather: 0 { id: ... }
    return `${iconId}`;
} */

const transformWeather = weather_data => {
    //const { weather } = weather_data;  // Aqui se envia todo el [ ] y necesito el icon o id para mostrar el icono
    //const  icon = getWeatherState( weather );
    
    const { humidity, temp } = weather_data.main;   // Esto es lo que devuelve la api weatherMap en el objecto main. Verificar
    const { speed }     = weather_data.wind;
    const icon          = String(weather_data.weather[0].id);
    const temperature   = getTemp(temp);

    const data =   { humidity, temperature, icon, wind: `${speed} mt/s` }
    
    return data;
}

export default transformWeather;