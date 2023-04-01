import React, { useEffect, useState } from 'react'
import './Main.css'
import MainLayout from '../../Layout/MainLayout'

export default function Main() {
  // const [currentImg, setCurrentImg] = useState(undefined)
  // const [currentColorForImg, setCurrentColorForImg] = useState(undefined)


  // useEffect(() => {
  //   setCurrentImg('img/Winter.jpeg')
  //   setCurrentColorForImg('(197,222,229)')
  // }, [])
  

  // setInterval(() => {
    // if (choicerTime < 15) {
      // setCurrentImg('img/Winter.jpeg')
      // setCurrentColorForImg('(197,222,229)')
  //   } else if (choicerTime > 15 && choicerTime < 30) {
  //     setCurrentImg('img/Summer.jpeg')
  //     setCurrentColorForImg('(243,219,121)')
  //   } else if (choicerTime > 30 && choicerTime < 45) {
  //     setCurrentImg('img/Spring.jpeg')
  //     setCurrentColorForImg(`(194,230,122)`)
  //   } 
  //   else if (choicerTime > 45) {
  //     setCurrentImg(undefined)
  //     setCurrentColorForImg('(243,219,121)')
  //   }
  // },1000)

  return (
    <MainLayout>
      {/* <div className="MainPage" style={{backgroundColor:`rgb${currentColorForImg}`}}> */}
      <div className="MainPage">
          <h1 style={{position:'relative', zIndex:'2'}} className="MainPageH1">Главная страница агенства 365:events</h1>
          <h2 style={{position:'relative', zIndex:'2'}} className="MainPageH2">
            Доставляем с любовью самые тёплые и волшебные праздники на дом, в детский садик, школу или офис! 365 дней в году.
          </h2>
      </div>
    </MainLayout>

  )
}
