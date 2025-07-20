import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductExplorer from './components/ProductExplorer';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPart, setSelectedPart] = useState(null);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [tourTrigger, setTourTrigger] = useState(false);

  const navigateTo = (page, options = {}) => {
    setFadeClass('fade-out');
    setTimeout(() => {
      if (page === 'product' && options.startTour) {
        setTourTrigger(true);
      } else {
        setTourTrigger(false);
      }
      setCurrentPage(page);
      window.scrollTo(0, 0);
      setFadeClass('fade-in');
    }, 800);
  };

  const openPartDetails = (part) => {
    setSelectedPart(part);
  };

  const closePartDetails = () => {
    setSelectedPart(null);
  };

  useEffect(() => {
    const handleNavigateHome = () => navigateTo('home');
    window.addEventListener('navigate-home', handleNavigateHome);
    return () => window.removeEventListener('navigate-home', handleNavigateHome);
  }, []);

  return (
    <div className="app">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      <div className={fadeClass}>
        <main>
          {currentPage === 'home' ? (
            <HeroSection navigateTo={navigateTo} />
          ) : (
            <ProductExplorer 
              openPartDetails={openPartDetails} 
              selectedPart={selectedPart}
              closePartDetails={closePartDetails}
              startTourOnLoad={tourTrigger}
            />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
