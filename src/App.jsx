import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Featured from './components/Featured';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Featured />
      <div style={{ backgroundColor: 'red', height: '800px' }}></div>
      <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
      <Footer />
    </div>
  );
};

export default App;
