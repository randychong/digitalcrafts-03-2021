import './App.css';
import Navbar from "../src/components/Navbar.js"
import Logo from "../src/components/Logo.js"
import Input from "../src/components/Input.js"
import Buttons from "../src/components/Buttons.js"
import Footer from "../src/components/Footer.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Input />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
