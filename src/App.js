import logo from './logo.svg';
import './App.css';
// import GuestGreeting from './components/GuestGreeting';
// import UserGreeting from './components/UserGreeting';
import Greeting from './components/Greeting';
import React, {useState} from "react"

function App() {
  const [click, setClick]= useState(true)
  const onClick=()=>{
    setClick(!click)
  }
  return (
    <div className="App">
      <header className="App-header">
      <Greeting isLoggedIn={true} onAdd={onClick} />
      </header>

    </div>
  );
}

export default App;
