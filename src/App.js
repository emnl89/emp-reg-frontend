import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Authwrapper from './auth/Authwrapper';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Authwrapper/>
      </BrowserRouter>
    </div>
  );
}

export default App;
