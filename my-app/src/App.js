import logo from './logo.svg';
import './App.css';
import Weather from "./weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
      <Weather />
    </div>
  );
}

export default App;
