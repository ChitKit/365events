import React from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'

export default function NavBar({currentImg}) {

  //TODO Сделать группировку group "Услуги праздники, шоу, мастер классы"
  return (
    <>
      <div className='MetaLayout'>
          <Link to={"/"}>
            <img className="LogoToHome" src="./logoHeader192.png" alt="logo" />
          </Link>
          <div className="NavigationApp">
          <Link to={"/"}>Главная</Link>
          <Link to={"/events"}>Услуги</Link>
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
    </>
  )
}
