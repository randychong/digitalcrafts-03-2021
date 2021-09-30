import './App.css';
import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar';
import Form from "./components/Form"
import { Container } from './styled-components/App-components';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Container>
        <Sidebar />
        <Form />
      </Container>
    </div>
  );
}

export default App;
