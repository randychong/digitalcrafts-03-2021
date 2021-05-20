import './App.css';
import ClassBased from "./components/ClassBased"
import FunctionalBased from "./components/FunctionalBased"

function App() {
  return (
    <div className="App">
      <h1>Homepage</h1>
        <ClassBased />
        <FunctionalBased />
    </div>
  );
}

export default App;
