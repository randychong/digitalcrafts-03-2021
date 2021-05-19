import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Forms React</h1>
      <div className="shipping-container">
      <form className="shipping-form">
        <input type="text" className="input-item" placeholder="First Name"/>
        <input type="text" className="input-item" placeholder="Last Name"/>
        <input type="text" className="input-item" id="street" placeholder="Street Address"/>
        <input type="text" className="input-item" id="apt" placeholder="Apt, Suite"/>
        <input type="text" className="input-item" placeholder="Postal Code"/>
        <input type="text" className="input-item" placeholder="City"/>
        <input type="text" className="input-item" placeholder="State"/>
        <input type="text" className="input-item" placeholder="Country"/>
        <input type="text" className="input-item" placeholder="Phone"/>
        <input type="submit" className="input-item" id="btn" placeholder="Submit"/>
      </form>
      </div>
    </div>
  );
}

export default App;
