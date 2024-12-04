import './App.css';
import ToggleBtn from './ToggleColor';
import EventCard from './EventCard';
import { useState, useEffect } from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Обновление темы по кнопке в ToggleBtn
  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkTheme ? 'black' : 'white';
  }, [isDarkTheme]);

  return (
    <div className="card__box" style={{ color: isDarkTheme ? 'white' : 'black'}}>
      <ToggleBtn toggleTheme={toggleTheme} />
      <EventCard name='Концерт ЛСП' date='08.12.24' place='СКК Арена-Омск' isDarkTheme={isDarkTheme}/>
      <EventCard name='Новогодний салют' date='01.01.25' place='Иртышская набережная' isDarkTheme={isDarkTheme}/>
      <EventCard name='Парад Победы' date='09.05.25' place='Улица Ленина' isDarkTheme={isDarkTheme}/>
    </div>
  );
}

export default App;

