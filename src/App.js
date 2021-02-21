// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [categories] = useState([
    {
      name: 'navigation',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'project', description: 'Portraits of people in my life' },
    { name: 'footer', description: 'Delicious delicacies' },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      </Header>
      <main>
        <div>
          {!contactSelected ? (
            <>
              <Project currentCategory={currentCategory}></Project>
              <About></About>
            </>
          ) : (
              <ContactForm></ContactForm>
            )}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
