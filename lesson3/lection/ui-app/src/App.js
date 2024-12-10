

import './App.css';
// import DashboardLayoutBasic from './components/Appbar';
import InputForm from './components/Form';
import ParentCounter from './components/ParentCounter';
import HoverRating from './components/Rating';


function App() {
  return (
    <div className="App">

      <HoverRating />
      <ParentCounter />
      <InputForm />
    </div>
  );
}

export default App;
