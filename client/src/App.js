import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Price from './pages/Price/Price'
import Team from './components/Team/Team'
// import Header from './components/Header/Header';
import Contacts from './pages/Contacts/Contacts';
// import Footer from './components/Footer/Footer';
import Animators from './pages/Animators/Animators';
import Shows from './pages/Shows/Shows';
import Events from './pages/Events/Events';
import MasterClasses from './pages/MasterClasses/MasterClasses';




function App() {
  const [currentImg, setCurrentImg] = useState(undefined)
  const [currentColorForImg, setCurrentColorForImg] = useState(undefined)
  const [loader, setLoader] = useState(false)
  // const [welcome, setWelcome] = useState(true)

  useEffect(() => {
    const choicerTime = new Date().getSeconds()
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
      {/* <Header /> */}
      <div className='MetaLayout'>
              <Link to={"/"}>
                <img className="LogoToHome" src="./logoHeader192.png" alt="logo" />
              </Link>
              <div className="NavigationApp">
              <Link to={"/"}>Главная</Link>
              <Link to={"/events"}>Праздники</Link>
              <Link to={"/animators"}>Аниматоры</Link>
              <Link to={"/shows"}>Шоу</Link>
              <Link to={"/master_classes"}>Мастер классы</Link>
              <Link to={"/additional_services"}>На заказ</Link>
              <Link to={"/about"}>О нас</Link>
              <Link to={"/contacts"}>Контакты</Link>
              </div>
            </div>
            <div style={{height: '100vh', width:'100vw', display:'flex', justifyContent:'flex-end',alignItems:'flex-end', position:'fixed', zIndex:'1'}} >
                <img s style={{zIndex:'0',height: '100vh', width:'100vw',}} src={`${currentImg}`} alt={`${currentImg}`} ></img>
            </div>
      <Routes>
        <Route path="/" element={<Main currentColorForImg={currentColorForImg}/>} />
        <Route path="/events" element={<Events currentColorForImg={currentColorForImg}/>} />
        <Route path="/animators" element={<Animators currentColorForImg={currentColorForImg}/>} />
        <Route path="/shows" element={<Shows currentColorForImg={currentColorForImg}/>} />
        <Route path="/additional_services" element={<Price currentColorForImg={currentColorForImg}/>} />
        <Route path="/about" element={<About currentColorForImg={currentColorForImg}/>} />
        <Route path="/master_classes" element={<MasterClasses currentColorForImg={currentColorForImg}/>} />
        <Route path="/contacts" element={<Contacts currentColorForImg={currentColorForImg}/>} />
        <Route path="/team" element={<Team currentColorForImg={currentColorForImg}/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
