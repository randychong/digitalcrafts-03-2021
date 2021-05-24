import './App.css';

function App() {
  const joke = async () => {
    let data = await fetch("https://icanhazdadjoke.com")
    let json = data.json
  }
  joke()
  return (
    <div className="App">
      <h1>UseEffect</h1>
    </div>
  );
}

export default App;
