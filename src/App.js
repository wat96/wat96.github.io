import React from 'react';
import Marquee from './components/Marquee';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css'

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Marquee />
    </div>
  );
}

export default App;
