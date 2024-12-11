import './App.css';
import MouseInfo from './components/MouseInfo';
import MouseTracker from './components/MouseTracker';

function App() {
  return (
    <div className="App">
        <h1>Пример Render props с функциональными компонентами</h1>
        <MouseTracker render={({x,y}) => <MouseInfo x={x} y={y} />} />
    </div>
  );
}

export default App;
