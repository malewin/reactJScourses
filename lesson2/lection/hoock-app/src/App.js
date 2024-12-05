
import './App.css';
import Show from './Visible';
import Timer from './Timer';
import RefFocus from './Focus';
import Counter from './Counter';
import MessagesList from './MessagesList';

function App() {
  return (
    <div className="App">
      <Timer />
      <Counter />
      <Show data='Ты' />
      <Show data='Самый' />
      <Show data='Лучший' />
      <RefFocus />
      <MessagesList />
    </div>
  );
}

export default App;
