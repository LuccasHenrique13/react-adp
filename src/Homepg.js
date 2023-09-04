import React from 'react';
import { ReactDOM } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ScrollAnimationComponent from './components/ScrollAnimationComponent';
import Footer from './components/Footer';


const Homepg = () =>  {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <Projects/>
      <ScrollAnimationComponent/>
      <Footer />
    </div>
  );
}

export default Homepg;
