import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './header';
import Navbar from './Navbar';

const App = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch('http://localhost:9000/APItest')
      .then(res => res.text())
      .then(res => setText(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />

      {/* <footer className="App-footer">
        {(text === "") ? 'Loading....' : text}
      </footer> */}
    </div>
  );
}

export default App;
