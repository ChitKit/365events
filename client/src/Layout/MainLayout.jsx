import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MainLayout.css'
import { Fireworks } from '@fireworks-js/react'

export default function MainLayout(props) {
  const [currentImg, setCurrentImg] = useState(undefined)
  const [currentColorForImg, setCurrentColorForImg] = useState(undefined)
  const [loader, setLoader] = useState(false)
  // const [welcome, setWelcome] = useState(true)

  useEffect(() => {
    const choicerTime = new Date().getSeconds()
    setLoader(true)
    if (choicerTime < 15) {
      setCurrentImg('img/Winter.jpg')
      setCurrentColorForImg('(197,222,229)')
      setLoader(false)
    } else if (choicerTime > 15 && choicerTime < 30) {
      setCurrentImg('img/Summer.jpg')
      setCurrentColorForImg('(243,219,121)')
      setLoader(false)
    } else if (choicerTime > 30 && choicerTime < 45) {
      setCurrentImg('img/Spring.jpg')
      setCurrentColorForImg(`(194,230,122)`)
      setLoader(false)
    } else if (choicerTime > 45) {
      setCurrentImg('img/Autumn.jpg')
      setCurrentColorForImg('(241,177,139)')
      setLoader(false)
    }
  }, [])
  

  // setTimeout(() => {setWelcome(false)},1000 * 10)
  setInterval(() => {
    const choicerTime = new Date().getMinutes()
    setLoader(true)
    if (choicerTime < 15) {
      setCurrentImg('img/Winter.jpg')
      setCurrentColorForImg('(197,222,229)')
      setLoader(false)
    } else if (choicerTime > 15 && choicerTime < 30) {
      setCurrentImg('img/Summer.jpg')
      setCurrentColorForImg('(243,219,121)')
      setLoader(false)
    } else if (choicerTime > 30 && choicerTime < 45) {
      setCurrentImg('img/Spring.jpg')
      setCurrentColorForImg(`(194,230,122)`)
      setLoader(false)
    } else if (choicerTime > 45) {
      setCurrentImg('img/Autumn.jpg')
      setCurrentColorForImg('(241,177,139)')
      setLoader(false)
    }
  },1000 * 60 )
  
  // useEffect(() => {
  //   setCurrentImg('img/Summer.jpg')
  //   setCurrentColorForImg('(243,219,121)')
  // }, [])

  return (
    <>
      {loader ? 
        <div style={{width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <img className="Loader" src="logo512.png" alt="logo" />
        </div>
        :
        <div style={{backgroundColor:`rgb${currentColorForImg}`, width:'100%', height: '100%'}}>
            <div className='MetaLayout'>
              <Link to={"/"}>
                <img className="LogoToHome" src="./logoHeader192.png" alt="logo" />
              </Link>
              <div className="NavigationApp">
              <Link to={"/"}>Главная</Link>
              <Link to={"/"}>Праздники</Link>
              <Link to={"/"}>Аниматоры</Link>
              <Link to={"/"}>Шоу</Link>
              <Link to={"/"}>Мастер классы</Link>
              {/* <Link to={"/price"}>Праздники</Link> */}
              {/* <Link to={"/team"}>Аниматоры</Link> */}
              {/* <Link to={"/show_programs"}>Шоу</Link> */}
              {/* <Link to={"/additional_services"}>На заказ</Link> */}
              <Link to={"/about"}>О нас</Link>
              <Link to={"/contacts"}>Контакты</Link>
              </div>
            </div>
            <div style={{height: '100vh', width:'100vw', display:'flex', justifyContent:'flex-end',alignItems:'flex-end', position:'fixed', zIndex:'1'}} >
                <img s style={{zIndex:'0',height: '100vh', width:'100vw',}} src={`${currentImg}`} alt={`${currentImg}`} ></img>
            </div>
            <div className="Content">{props.children}</div>
        </div>
      }
    </>
  )
}
