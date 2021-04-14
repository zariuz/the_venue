import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div style={{ backgroundColor: 'red', height: '800px' }}></div>
      <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
      <div style={{ backgroundColor: 'green', height: '800px' }}></div>
      <div style={{ backgroundColor: 'yellow', height: '800px' }}></div>
      <Footer />
    </div>
  );
};

export default App;
