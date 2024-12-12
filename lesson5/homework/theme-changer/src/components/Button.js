import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Button = () => {
  const theme = useSelector(state => state);
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch({ type: 'TOGGLE_THEME'});
  };

  return (
    <div>
      <button style={{padding: '5px'}} onClick={changeTheme}>{theme === 'light' ? <DarkModeIcon/> : <LightModeIcon/>}</button>
    </div>
  );
};

export default Button;