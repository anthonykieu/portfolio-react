import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';



function App() {

  useEffect(() => {
    document.title = currentPage;
  })

  const navBar = ['About', 'Portfolio', 'Resume', 'Contact'];
  const [currentPage, setCurrentPage] = useState(navBar[0]);

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />
        break;
      case 'Resume':
        return <Resume />
        break;
      case 'Contact':
        return <Contact />
        break;
      default:
        return <About />
        break;
    }
  }

  return (
    <div>
      <Nav
        navBar={navBar}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
      </Nav>
      <main>
        {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
