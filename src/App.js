import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Features from './components/Features';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Products />
      <About />
      <Features />
    </React.Fragment>
  )
}

export default App;
