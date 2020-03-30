import React from 'react';
import './App.css';
import Navbar from './components/nav-bar/main-navbar';
import Introduction from './components/introduction/main-Introduction';
import Cards from './components/cards/main-cards';
import Brands from './components/brands/main-brands';
import Stats from './components/stats/main-stats';
import Offices from './components/offices/main-offices';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Cards/>
      <Brands/>
      <Stats/>
      <Offices/>
      <hr/>
      <Footer/>
    </div>
  );
}
export default App;
