import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MainLayout.css'

export default function MainLayout() {
    
  const [currentImg, setCurrentImg] = useState(undefined)
  const [currentColorForImg, setCurrentColorForImg] = useState(undefined)


  useEffect(() => {
    setCurrentImg('img/Winter.jpeg')
    setCurrentColorForImg('(197,222,229)')
  }, [])

  return (
    <>
        <div className="NavigationApp" style={{right:'15%', position:'fixed', zIndex:'2', top:'43%'}}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
            <Link to={"/price"}>Услуги</Link>
            <Link to={"/team"}>Команда</Link>
            <Link to={"/contacts"}>Контакты</Link>
        </div>
        <div style={{height: '100%', width:'100%', display:'flex', justifyContent:'flex-end',alignItems:'flex-end', position:'fixed', zIndex:'1'}} >
            <img style={{width:'100%', height:'100%', zIndex:'0'}} src={`${currentImg}`} alt="main_pic" ></img>
        </div>
    </>
  )
}
