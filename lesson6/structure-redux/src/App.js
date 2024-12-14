import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ButtonComponent from './components/ButtonComponent';
import CounterComponent from './components/CounterComponent';
import './App.css';
import ButtonComponentMinus from './components/ButtonComponentMinus';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CounterComponent />
        <ButtonComponent />
        <ButtonComponentMinus />
      </div>
    </Provider>
  );
};

export default App;
