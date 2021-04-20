import React from 'react';
import './styles.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Featured from './components/Featured';
import VenueNfo from './components/VenueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueNfo />
      <Highlights />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
