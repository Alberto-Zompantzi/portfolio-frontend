import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { wakeupBackend } from './services/api';
import './App.css';

/**
 * Main Application component that orchestrates all sections.
 * Initiates the backend wake-up signal on mount.
 */
function App() {
  useEffect(() => {
    wakeupBackend();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
