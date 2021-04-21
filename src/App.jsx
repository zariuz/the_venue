import React from 'react';
import { Element } from 'react-scroll';

import './styles.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Featured from './components/Featured';
import VenueNfo from './components/VenueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
