import React from 'react';
import { ReactDOM } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Embed from './components/Embed';


const Pgabijaudi = () =>  {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Embed />
      <Footer />
    </div>
  );
}

export default Pgabijaudi;
