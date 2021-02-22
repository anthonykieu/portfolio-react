// import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
// import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const renderPage = () => {
    switch (currentPage) {
      case 'Project':
        return <Project />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  const navBar = ['About', 'Project', 'Resume', 'Contact'];
  const [currentPage, setCurrentPage] = useState(navBar[0]);


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
