
import './App.css';
import GistList from './componnents/AxiosList';
import PublicList from './componnents/FetchList';
import AsyncFetchList from './componnents/AsyncList';

function App() {
  return (
    <div className="App">
      <GistList />
      <PublicList />
      <AsyncFetchList/>
    </div>
  );
}

export default App;
