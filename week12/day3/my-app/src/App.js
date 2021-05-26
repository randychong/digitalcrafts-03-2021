import './App.css';
import React, { useState } from "react"
import Counter from "./components/Counter"

function App() {
  const [count, setCounter] = useState(0)
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
