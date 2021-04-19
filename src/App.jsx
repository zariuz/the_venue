import React from 'react';
import './styles.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Featured from './components/Featured';
import VenueNfo from './components/VenueNfo';
import Highlights from './components/Highlights';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueNfo />
      <Highlights />
      <Footer />
    </div>
  );
};

export default App;
