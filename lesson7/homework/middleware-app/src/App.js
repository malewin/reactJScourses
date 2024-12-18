import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {PersistGate} from 'redux-persist';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <TasksList />
      </Provider>
    </div>
    
  );
}

export default App;
