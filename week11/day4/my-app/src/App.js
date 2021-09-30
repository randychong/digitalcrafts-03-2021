import './App.css';
import React,  {useState} from 'react';
import SignUpForm from "./components/SignUpForm"
import UserDetails from "./components/UserDetails"

const formValues = {
  firstName: "",
  lastName: "",
  birth: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  username: "",
  email: "",
}

function App() {
  const [form, setForm] = useState(formValues)
  const [userDetails, setUserDetails] = useState({})

  function submitForm(e) {
    e.preventDefault()
    console.log("form submitted")
    // setUserDetails(form)
    // setForm(formValues)
  }
  
  return (
    <div className="App">
      <SignUpForm
      form={form}
      setForm={setForm}
      submitForm={submitForm}
      />
      <UserDetails
      userDetails={userDetails}
      />
    </div>
  );
}

export default App;
