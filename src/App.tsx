import React from 'react';
import './App.css';
import Footer from './components/Footer';
import GithubData from './components/GithubData';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <GithubData />
      <Footer />
    </div>
  );
};

export default App;
