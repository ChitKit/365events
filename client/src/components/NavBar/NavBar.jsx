import React, { useEffect, useState } from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'

export default function NavBar({currentImg}) {

  const [widthScreen, setWidthScreen] = useState(undefined)
  useEffect(() => {
    if (widthScreen === undefined) {
      setWidthScreen(window.screen.width)
    }
  },[])

  useEffect(() => {
    
  },[currentImg])
  
  //TODO Сделать группировку group "Услуги праздники, шоу, мастер классы"
  return (
    <>
    {widthScreen > 400 ?
      <>
        <div className='MetaLayout'>
            <Link to={"/"}>
              <img className="LogoToHome" src="./logoHeader192.png" alt="logo" />
            </Link>
            <div className="NavigationApp">
              <Link to={"/"}>Главная</Link>
            <Link to={"/services"}>Услуги</Link>
            {/* <Link to={"/animators"}>Аниматоры</Link> */}
            {/* <Link to={"/shows"}>Шоу</Link>  */}
            {/* <Link to={"/master_classes"}>Мастер классы</Link> */}
            {/* <Link to={"/additional_services"}>На заказ</Link> */}
            <Link to={"/about"}>О нас</Link>
            <Link to={"/contacts"}>Контакты</Link>
            </div>
          </div>
          <div className="BackgroundImageDiv" >
              <img className="BackgroundImage" src={`${currentImg}`} alt={`${currentImg}`} ></img>
          </div>
      </>
      :
      <>
        <div className='MetaLayout'>
          <Link to={"/"}>
            <img className="LogoToHomeMobile" src="./logoHeader192.png" alt="logo" />
          </Link>
          <button className="MobileMenu">|||</button>
        </div>
        <div className="BackgroundImageDiv" >
          <img className="BackgroundImage" src={`${currentImg}`} alt={`${currentImg}`} ></img>
        </div>
      </>
    }
    </>
  )
}
