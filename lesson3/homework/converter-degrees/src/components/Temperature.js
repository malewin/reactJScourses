import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState , useEffect} from 'react';
import './TemperatureConverter.css'; // Импортируем стили

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [arrowSizeCelsius, setArrowSizeCelsius] = useState('50px');
    const [arrowSizeFahrenheit, setArrowSizeFahrenheit] = useState('50px');


    useEffect(() => {
        if (celsius !== '') {
            // const convertedFahrenheit = (parseFloat(celsius) * 9/5) + 32;
            // setFahrenheit(convertedFahrenheit.toFixed(2));
            setArrowSizeCelsius('70px'); 
            setArrowSizeFahrenheit('50px'); 
        }
    }, [celsius]);

    useEffect(() => {
        if (fahrenheit !== '') {
            // const convertedCelsius = (parseFloat(fahrenheit) - 32) * 5/9;
            // setCelsius(convertedCelsius.toFixed(2));
            setArrowSizeFahrenheit('70px'); 
            setArrowSizeCelsius('50px'); 
        }
    }, [fahrenheit]);

    useEffect(() => {
        if (celsius !== '' && fahrenheit !== ''){
            setArrowSizeFahrenheit('50px'); 
            setArrowSizeCelsius('50px'); 
        }
    },)
    
    const convertValue = () => {
        if (celsius !== '') {
            const convertedFahrenheit = (parseFloat(celsius) * 9/5) + 32;
            setFahrenheit(convertedFahrenheit.toFixed(2));
        } else if (fahrenheit !== '') {
            const convertedCelsius = (parseFloat(fahrenheit) - 32) * 5/9;
            setCelsius(convertedCelsius.toFixed(2));
        }
    }

    const resetAll = () => {
        setCelsius('');
        setFahrenheit('');
        setArrowSizeCelsius('50px');
        setArrowSizeFahrenheit('50px');
    }
    
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            className="converter__box"
        >
            <h1 style={{ color: 'white' }}>Temperature Converter</h1>
            <TextField
                id="celsius-input"
                label="Celsius,(℃)"
                variant="outlined"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
            />
            <div>
                <ArrowDownwardIcon 
                    style={{ color: 'white', width: arrowSizeCelsius, height: arrowSizeCelsius }} 
                />
                <ArrowUpwardIcon 
                    style={{ color: 'white', width: arrowSizeFahrenheit, height: arrowSizeFahrenheit }} 
                />
            </div>
            <TextField
                id="fahrenheit-input"
                label="Fahrenheit,(℉)"
                variant="outlined"
                value={fahrenheit}
                onChange={(e) => setFahrenheit(e.target.value)}
            />
            <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
            <Button
                variant="contained"
                color="success"
                onClick={() => {convertValue()}}
            >
                Convert
            </Button>
            <Button
                variant="contained"
                color="error"
                onClick={() => {resetAll()}}
            >
                Reset
            </Button>
            </div>
            
        </Box>
    );
};

export default TemperatureConverter;
