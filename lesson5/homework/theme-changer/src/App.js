import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import ThemeApp from './components/ThemeApp';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeApp/>
    </Provider>
  );
};

export default App;
