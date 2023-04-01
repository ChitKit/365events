import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Price from './components/Price/Price'
import Team from './components/Team/Team'
import About from './components/About/About'
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/team" element={<Team />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
