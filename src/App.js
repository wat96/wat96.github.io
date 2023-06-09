import React from 'react';
import ContentHolder from './components/ContentHolder';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css'

function App() {
    return (
    <>
        <ParticlesBackground className="particle-bkgd" />
        <div className="App">
            <div className='main-app'>
              <Marquee />
              <ContentHolder/>
            </div>
            
            <Footer/>
        </div>
    </>
    );
}

export default App;
