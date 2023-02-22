import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Price from './components/Price/Price'
import Team from './components/Team/Team'
import About from './components/About/About'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/team" element={<Team />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
