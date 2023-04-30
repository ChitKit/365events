import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Main from './pages/Main/Main';
import About from './pages/About/About';
import Price from './pages/Price/Price'
// import Team from './components/Team/Team'
// import Header from './components/Header/Header';
import Contacts from './pages/Contacts/Contacts';
// import Footer from './components/Footer/Footer';
import Animators from './pages/Animators/Animators';
import Shows from './pages/Shows/Shows';
import Events from './pages/Events/Events';
import MasterClasses from './pages/MasterClasses/MasterClasses';

import Administration from './components/Team/Administration/Administration';
import Developers from './components/Team/Developers/Developers';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [currentImg, setCurrentImg] = useState(undefined)
  const [currentColorForImg, setCurrentColorForImg] = useState(undefined)
  const [colorPuzzlePhoto, setColorPuzzlePhoto] = useState(undefined)
  const [loader, setLoader] = useState(false)
  // const [welcome, setWelcome] = useState(true)

  useEffect(() => {
    const choicerTime = new Date().getMinutes()
    setLoader(true)
    if (choicerTime < 15) {
      if (window.screen.width > 400 ) {
        setCurrentImg('img/Winter.jpg')
      } else {
        setCurrentImg('img/WinterMobile.jpg')
      }
      setCurrentColorForImg('(197,222,229')
      setColorPuzzlePhoto('C')
      setLoader(false)
    } else if (choicerTime > 15 && choicerTime < 30) {
      if (window.screen.width > 400) {
        setCurrentImg('img/Summer.jpg')
      } else {
        setCurrentImg('img/SummerMobile.jpg')
      }
      setCurrentColorForImg('(243,219,121')
      setColorPuzzlePhoto('Y')
      setLoader(false)
    } else if (choicerTime > 30 && choicerTime < 45) {
      if (window.screen.width > 400) {
        setCurrentImg('img/Spring.jpg')
      } else {
        setCurrentImg('img/SpringMobile.jpg')
      }
      setCurrentColorForImg(`(194,230,122`)
      setColorPuzzlePhoto('G')
      setLoader(false)
    } else if (choicerTime > 45) {
      if (window.screen.width > 400) {
        setCurrentImg('img/Autumn.jpg')
      } else {
        setCurrentImg('img/AutumnMobile.jpg')
      }
      setCurrentColorForImg('(241,177,139')
      setColorPuzzlePhoto('P')
      setLoader(false)
    }
  }, [])
  
  setInterval(() => {
    const choicerTime = new Date().getMinutes()
    setLoader(true)
    if (choicerTime < 15) {
      setCurrentImg('img/Winter.jpg')
      setCurrentColorForImg('(197,222,229')
      setLoader(false)
    } else if (choicerTime > 15 && choicerTime < 30) {
      setCurrentImg('img/Summer.jpg')
      setCurrentColorForImg('(243,219,121')
      setLoader(false)
    } else if (choicerTime > 30 && choicerTime < 45) {
      setCurrentImg('img/Spring.jpg')
      setCurrentColorForImg(`(194,230,122`)
      setLoader(false)
    } else if (choicerTime > 45) {
      setCurrentImg('img/Autumn.jpg')
      setCurrentColorForImg('(241,177,139')
      setLoader(false)
    }
  },1000 * 60 )

  return (
    <div className="App">
      <NavBar currentImg={currentImg}/>
      <Routes>
        <Route path="/" element={<Main currentColorForImg={currentColorForImg}/>} />
        <Route path="/events" element={<Events currentColorForImg={currentColorForImg}/>} />
        <Route path="/animators" element={<Animators currentColorForImg={currentColorForImg} colorPuzzlePhoto={colorPuzzlePhoto}/>} />
        <Route path="/shows" element={<Shows currentColorForImg={currentColorForImg}/>} />
        <Route path="/additional_services" element={<Price currentColorForImg={currentColorForImg}/>} />
        <Route path="/about" element={<About currentColorForImg={currentColorForImg}/>} />
        <Route path="/master_classes" element={<MasterClasses currentColorForImg={currentColorForImg}/>} />
        <Route path="/contacts" element={<Contacts currentColorForImg={currentColorForImg}/>} />
        <Route path="/administration" element={<Administration currentColorForImg={currentColorForImg}/>} />
        {/* <Route path="/developers" element={<Developers currentColorForImg={currentColorForImg}/>} /> */}
      </Routes>
    </div>
    
  );
}

export default App;
