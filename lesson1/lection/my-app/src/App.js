import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Article name="Info" number="1"/>
      <Article name="Blog" number="2"/>
    </div>
  );
}

function Article(props) {
  let colorSiteWhite = false;
  return ( 
    <div>
      <h2 style={{color: colorSiteWhite ? 'green' : 'red'}}>Статья про {props.name} номер {props.number}</h2>
      <a href='#'>Читать статью</a>
    </div>
  );
}

export default App;
