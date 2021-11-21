import logo from './logo.svg';
import './App.css';

import { useThemeState } from "providers/theme"

function App() {
  const { toggleDarkMode } = useThemeState();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button onClick={toggleDarkMode}>
        DarkMode
      </button>
      </header>
    </div>
  );
}

export default App;
