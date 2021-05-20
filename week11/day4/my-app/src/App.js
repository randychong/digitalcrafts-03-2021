import './App.css';
import React,  {useState} from 'react';
import SignUpForm from "./components/SignUpForm"
import UserDetails from "./components/UserDetails"

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  return (
    <div className="App">
      <SignUpForm
      firstName={firstName} setFirstName={setFirstName}
      lastName={lastName} setLastName={setLastName}
      email={email} setEmail={setEmail}
      password={password} setPassword={setPassword}
      password2={password2} setPassword2={setPassword2}
      />
      <UserDetails
      />
    </div>
  );
}

export default App;
