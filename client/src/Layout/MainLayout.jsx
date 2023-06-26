import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MainLayout.scss'
// import { Fireworks } from '@fireworks-js/react'

export default function MainLayout(props) {
  const [currentImg, setCurrentImg] = useState(undefined)
  const [currentColorForImg, setCurrentColorForImg] = useState(undefined)
  const [loader, setLoader] = useState(false)

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

  return (
    <>
      {loader ? 
        <div style={{width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <img className="Loader" src="logo512.png" alt="logo" />
        </div>
        :
        // <div style={{backgroundColor:`rgb${currentColorForImg}`, width:'100%', height: '100%'}}>
        <div style={{backgroundImage:`url(./backgroundSpice.jpeg)`, width:'100%', height: '100%'}}>
            <div className="Content">{props.children}</div>
        </div>
      }
    </>
  )
}
