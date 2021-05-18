import './App.css';
import Navbar from "../src/components/Navbar.js"
import Logo from "../src/components/Logo.js"
import Input from "../src/components/Input.js"
import Buttons from "../src/components/Buttons.js"
import Footer from "../src/components/Footer.js"

function App() {
  return (
    <div className="App">
      <div className="Main-container">
      <Navbar />
      <div className="Center-container">
        <Logo />
        <Input />
        <Buttons />
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
