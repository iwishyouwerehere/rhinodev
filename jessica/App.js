import React, { useState } from 'react';
import './App.css';

function App() {
  const [raining, setRaining] = useState(false);
  const [letters, setLetters] = useState([]);

  const startRain = () => {
    setRaining(true);
    const intervalId = setInterval(() => {
      setLetters(prevLetters => [...prevLetters, generateLetter()]);
    }, 100);
    setTimeout(() => {
      clearInterval(intervalId);
      setRaining(false);
    }, 5000);
  };

  const generateLetter = () => {
    const letter = 'F';
    const left = Math.random() * window.innerWidth;
    const top = 0;
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    const style = {
      position: 'absolute',
      left,
      top,
      color,
      fontSize: `${Math.random() * 20 + 10}px`
    };
    return <div className="letter" style={style}>{letter}</div>;
  };

  return (
    <div className="App" style={{ backgroundColor: '#FFC0CB' }}>
      {letters}
      <div className="verdendi" onMouseEnter={startRain} onMouseLeave={() => setLetters([])}>
        verdendi
      </div>
    </div>
  );
}

export default App;
