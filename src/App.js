import React from "react";
import Header from './components/Header';
import Container from "./components/Container";
import './index.css';






function App() {
  return (
    <div className="App">
      {/******** HEADER ***********/}
      <header> 
        <Header />
      </header>

      {/******** CONTAINER ***********/}
      <div className='container'>
        <Container />
      </div>
    </div>
  );
}

export default App;
