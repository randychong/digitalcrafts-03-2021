import './App.css';
import CardContainer from "./components/CardContainer"
import { data } from "./data/data"

function App() {
  return (
    <div className="App">
      <h1>Homepage</h1>
      <CardContainer pokemonData={data}/>
    </div>
  );
}

export default App;
