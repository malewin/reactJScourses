import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const WeatherComponent = () => {
    const defaultCity = 'Москва';

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(defaultCity);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleCityChange = (e) => {
      setCity(e.target.value);
    };

    const getWeather = async () => {
        if (!city) return;
        try {
            setLoading(true);
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=551689e62080bf6398e7e8c05e48ddcc`);
            if (!response.ok) {
                throw new Error(`Ошибка при получении данных: ${response.status}`);
            };
            const result = await response.json();
            setWeatherData(result);
            setError(null);
        } catch (error) {
            setError('Город не найден');
            console.log('Обнаружена ошибка:');
            console.warn(error);
            setWeatherData(null);
        } finally {
            setLoading(false);
            console.log('Запрос отработал');
        }
    };

    useEffect(() => {
        getWeather();
    }, []);
    
    
    if (loading) return <CircularProgress />;
    return (

        <div className='weather_container'>
            <Box sx={{ '& button': { m: 1} }}>
            <TextField 
                id="outlined-basic" 
                label="City" 
                variant="outlined" 
                size="large"
                type='text'
                placeholder='Enter city'
                value={city}
                onChange={handleCityChange}
                className='textField'
                color='secondary'
            />
            <Button variant="contained" onClick={getWeather} size="large" className='btnSrch'>Search</Button>
            </Box>
            {error && <div className='error'>{error}</div>}
            {weatherData && (
                <div className='weather_info'>
                    <h3>{weatherData.name}</h3>
                    <p>Temperature: {Math.round(weatherData.main.temp - 273.15)} °C</p>
                    <p>Humidity: {weatherData.main.humidity > 71 ? `${weatherData.main.humidity}% - chance of rain` : `${weatherData.main.humidity}% - there will be no rain`}</p>
                    <p>Pressure: {weatherData.main.pressure} hPa</p>
                    <p>Wind speed: {weatherData.wind.speed} m/s</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};
export default WeatherComponent;