import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Main from './pages/Main/Main';
import Header from './components/Header/Header';

function App() {
  const [firstLoadApp, setFirstLoadApp] = useState(false)
  useEffect(() => {
      if (firstLoadApp === false) {
          setTimeout(() => {
              setFirstLoadApp(true)
          }, 3000);
      }
  }, [])
  return (
    <div className="App">
      {/* <NavBar currentImg={currentImg} currentColorForImg={currentColorForImg} /> */}
      <Header firstLoadApp={firstLoadApp} />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/services" element={<Services currentColorForImg={currentColorForImg}/>} />
        <Route path="/events" element={<Events currentColorForImg={currentColorForImg}/>} />
        <Route path="/animators" element={<Animators currentColorForImg={currentColorForImg} colorPuzzlePhoto={colorPuzzlePhoto}/>} />
        <Route path="/shows" element={<Shows currentColorForImg={currentColorForImg}/>} />
        <Route path="/additional_services" element={<Price currentColorForImg={currentColorForImg}/>} />
        <Route path="/about" element={<About currentColorForImg={currentColorForImg}/>} />
        <Route path="/master_classes" element={<MasterClasses currentColorForImg={currentColorForImg}/>} />
        <Route path="/contacts" element={<Contacts currentColorForImg={currentColorForImg}/>} />
        <Route path="/administration" element={<Administration currentColorForImg={currentColorForImg}/>} /> */}
        {/* <Route path="/developers" element={<Developers currentColorForImg={currentColorForImg}/>} /> */}
      </Routes>
      
    </div>
    
  );
}

export default App;
