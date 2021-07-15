import logo from './logo.svg';
import './App.css';
import AxiosPokemon from './components/AxiosPokemon'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Fetch Pokemon!</h1>
       <AxiosPokemon />
      </header>
    </div>
  );
}

export default App;
