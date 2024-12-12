import React from 'react';
import {useSelector} from 'react-redux';
import Button from './Button';

const ThemeApp = () => {
    const theme = useSelector(state => state)
    return (
        <div className='content' style={{ color: theme === 'light' ? 'black' : 'white', background : theme===  'light' ? 'white' : 'black'}}>
          <Button/>
          <h1>Тест цветовой темы</h1>
        </div>
  );
}

export default ThemeApp;