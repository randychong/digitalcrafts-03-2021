import './App.css';
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Highlights from "./components/Highlights"
import Posts from "./components/Posts"

function App() {
  return (
    <div className="App">
     <Navbar />
     <Profile />
     <Highlights />
     <Posts />
    </div>
  );
}

export default App;
