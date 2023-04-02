import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MainLayout.css'

export default function MainLayout() {
  const [currentImg, setCurrentImg] = useState(undefined)
  const [currentColorForImg, setCurrentColorForImg] = useState(undefined)
  const [loader, setLoader] = useState(false)

  setInterval(() => {
    const choicerTime = new Date().getSeconds()
    setLoader(true)
    if (choicerTime < 15) {
      setCurrentImg('img/Winter.jpeg')
      setCurrentColorForImg('(197,222,229)')
      setLoader(false)
    } else if (choicerTime > 15 && choicerTime < 30) {
      setCurrentImg('img/Summer.jpeg')
      setCurrentColorForImg('(243,219,121)')
      setLoader(false)
    } else if (choicerTime > 30 && choicerTime < 45) {
      setCurrentImg('img/Spring.jpeg')
      setCurrentColorForImg(`(194,230,122)`)
      setLoader(false)
    } 
    else if (choicerTime > 45) {
      setCurrentImg('img/Autumn.jpeg')
      setCurrentColorForImg('(241,177,139)')
      setLoader(false)
    }
  },1000)

  return (
    <>
      {loader ? 
        <div style={{width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <img className="Loader" src="logo512.png" alt="logo" />
        </div>
        :
        <>
          {currentImg !== undefined && currentColorForImg !== undefined &&
            <div style={{backgroundColor:`rgb${currentColorForImg}`, width:'100%', height: '100%'}}>
                <div className="NavigationApp" style={{right:'15%', position:'fixed', zIndex:'2', top:'43%'}}>
                    <Link to={"/"}>Главная</Link>
                    <Link to={"/about"}>О нас</Link>
                    <Link to={"/price"}>Услуги</Link>
                    <Link to={"/team"}>Команда</Link>
                    <Link to={"/contacts"}>Контакты</Link>
                </div>
                <div style={{height: '100%', width:'100%', display:'flex', justifyContent:'flex-end',alignItems:'flex-end', position:'fixed', zIndex:'1'}} >
                    <img style={{zIndex:'0'}} src={`${currentImg}`} alt="main_pic" ></img>
                </div>
            </div>
          }
        </>
      }
    </>
  )
}
