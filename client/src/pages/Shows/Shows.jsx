import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import './Shows.scss'

export default function Shows({currentColorForImg}) {
//   const [currentColorForImg, setBackGroundColorModule] = useState(undefined)

//   //! Добавить MOBX в ПРОЕКТ !!! ( заменить состояние!!!!!)
//   useEffect(() => {
//     const choicerTime = new Date().getSeconds()
//     if (choicerTime < 15) {
//       setBackGroundColorModule('(197,222,229')
//     } else if (choicerTime > 15 && choicerTime < 30) {
//       setBackGroundColorModule('(243,219,121')
//     } else if (choicerTime > 30 && choicerTime < 45) {
//       setBackGroundColorModule(`(194,230,122`)
//     } else if (choicerTime > 45) {
//       setBackGroundColorModule('(241,177,139')
//     }
//   }, [])
  
//   setInterval(() => {
//     const choicerTime = new Date().getMinutes()
//     if (choicerTime < 15) {
//       setBackGroundColorModule('(197,222,229')
//     } else if (choicerTime > 15 && choicerTime < 30) {
//       setBackGroundColorModule('(243,219,121')
//     } else if (choicerTime > 30 && choicerTime < 45) {
//       setBackGroundColorModule(`(194,230,122`)
//     } else if (choicerTime > 45) {
//       setBackGroundColorModule('(241,177,139')
//     }
//   },1000 * 60)
  
  // useEffect(() => {
  //   setCurrentImg('img/Summer.jpg')
  //   setBackGroundColorModule('(243,219,121)')
  // }, [])

  return (
    <MainLayout>
      <div style={{background:`rgba${currentColorForImg}, 0.7)`}} className="Shows" >
        <h1>Шоу</h1>
      </div>
    </MainLayout>
  )
}
