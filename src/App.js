import React from 'react'
import Landing from './components/LandingPage/Landing';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import About from './components/about/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
       
      {/* <div className="body-cont"> */}
      <main>
        <Navbar/>
        <Landing/>
        <About/>
        <Portfolio/>
      </main>
        <aside>
          <ul>
              <a href="/"><i className="fab fa-github"></i></a>
              <a href="/"><i className="fab fa-linkedin"></i></a>
              <a href="/"><i className="fab fa-instagram"></i></a>
              <a href="/"><i className="fab fa-twitter"></i></a>
          </ul>
        </aside>
      {/* </div> */}
    </div>
  );
}

export default App;
