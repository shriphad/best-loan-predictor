import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch('http://localhost:9000/APItest')
      .then(res => res.text())
      .then(re => setText(re))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        {(text === "") ? 'Loading....' : text}
      </footer>
    </div>
  );
}

export default App;
