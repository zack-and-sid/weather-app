import logo from './logo.svg';
import './App.css';

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_STACK_API;
  console.log('hello');
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <p>{apiKey}</p>
      </header>
    </div>
  );
}

export default App;
