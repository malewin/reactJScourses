import { createContext, useCallback, useContext, useState } from 'react';
import './App.css';

//task2
// // Шаг 1. Создаем контекст
// const ThemeContext = createContext();

// //Компонент использующий контекст
// const ThemeButton = () => {
//   // Шаг 2. Используем useContext  для доступа к контексту
//   const theme = useContext(ThemeContext);

//   return (
//     <button style={{ background: theme.background, color: theme.foreground}}>
//       Themed Button
//     </button>
//   );
// };

// // Компонент, который устанавливает контекст
// function App() {
//   // Шаг 3. Определяем состояние, которое будет передаваться через контекст
//   const [theme, setTheme] = useState({
//     background: 'lightgray',
//     foreground: 'black'
//   })
//   return (
//     <ThemeContext.Provider value={theme}>
//       <div>
//         <h1>Использование React.Context</h1>
//         <ThemeButton />
//         <button
//           onClick={() =>
//             setTheme({
//               background: 'black',
//               foreground: 'white',
//             })
//           }
//         >
//           Сменить тему
//         </button>
//         <button
//           onClick={() =>
//             setTheme({
//               background: 'white',
//               foreground: 'black',
//             })
//           }
//         >
//           Сменить тему
//         </button>
//       </div>
//     </ThemeContext.Provider>
//   );
// };

//task3
//создаем контексты для темы и заметок
const ThemeContext = createContext();
const NotesContext = createContext();

//Создаем пользовательские хуки для удобства использования контекстов
const useTheme = () => useContext(ThemeContext);
const useNotes = () => useContext(NotesContext);

//Компонент, отображающий список заметок
const NotesList = () => {
  const { notes } = useNotes();
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};

// Компонент, позволяющий добавлять заметки
const NoteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { addNote } = useNotes();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    addNote(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddNote}>Добавить статью</button>
    </div>
  );
};

//Компонент для переключения темы
const ThemeToggle = () => {
  const {theme, toggleTheme} = useTheme();
  return(
    <button onClick={toggleTheme} >Нажми чтобы переключить на {theme === 'light' ? 'темную' : 'светлую'} тему</button>
  );
};

const App = () => {
  const [theme, setTheme] = useState('light');
  const [notes, setNotes] = useState(['Элемент списка 1','Элемент списка 2']);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <NotesContext.Provider value={{ notes, addNote}}>
        <div className='content' style={{ color: theme === 'light' ? 'black' : 'white', background : theme === 'light' ? 'white' : 'black'}}>
          <h1>Список</h1>
          <ThemeToggle />
          <NotesList />
          <NoteInput />
        </div>
      </NotesContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
