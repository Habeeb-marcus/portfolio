import React from 'react'
import Landing from './components/LandingPage/Landing';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import About from './components/about/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App" id="app">
      <Navbar/>
      
      <div>
          <main>            
            <Landing/>
            <About/>
            <Portfolio/>
            <Contact/>
          </main>
          <aside>
            <ul>
                <a href="https://github.com/Habeeb-marcus"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/habeeb-makusota-6893721a9/"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/hardedohyin/"><i className="fab fa-instagram"></i></a>
                <a href="https://twitter.com/Harbeeybh"><i className="fab fa-twitter"></i></a>
            </ul>
          </aside>
      </div>
    </div>
  );
}

export default App;
