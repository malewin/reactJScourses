import logo from './logo.svg';

import './App.css';
import List from './components/List';

function App() {
  const liElements = [1, 2, 3, 4, 5, 6, 7]
  const renderItem = (item, index) => {
  const style = { color: index % 2 === 0 ? 'blue' : 'red' };

  return (
    <div style={style}>
      {item} - Уникальный стиль
    </div>
  );
};
  
  return (
      <div className="App">
        <h1>Изучаем React!</h1>
        <List listItems={liElements} renderItem={renderItem} />
      </div>
    );
  }

  export default App;
