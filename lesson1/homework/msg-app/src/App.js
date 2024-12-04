import './App.css';
import ToggleBtn from './ToggleColor';
import Message from './Msg';
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
    <div className="msg__box" style={{ color: isDarkTheme ? 'white' : 'black'}}>
      <ToggleBtn toggleTheme={toggleTheme} />
      <Message sender='Преподаватель_GB' text='Вы же еще не проходили хуки' date='5 минут назад' isDarkTheme={isDarkTheme}/>
      <Message sender='Студент_GB' text='Мне просто так захотелось выпендриться, я так вижу' date='3 минуты назад' isDarkTheme={isDarkTheme}/>
      <Message sender='Преподаватель_GB' text='Ладно, оценка Отлично' date='Недавно' isDarkTheme={isDarkTheme}/>
    </div>
  );
}

export default App;
