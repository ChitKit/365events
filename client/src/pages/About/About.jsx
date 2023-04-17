import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/MainLayout'
import './About.scss'
import { Link } from 'react-router-dom'

export default function About({currentColorForImg}) {
  // const [currentColorForImg, setBackGroundColorModule] = useState(undefined)

  // //! Добавить MOBX в ПРОЕКТ !!! ( заменить состояние!!!!!)
  // useEffect(() => {
  //   const choicerTime = new Date().getSeconds()
  //   if (choicerTime < 15) {
  //     setBackGroundColorModule('(197,222,229')
  //   } else if (choicerTime > 15 && choicerTime < 30) {
  //     setBackGroundColorModule('(243,219,121')
  //   } else if (choicerTime > 30 && choicerTime < 45) {
  //     setBackGroundColorModule(`(194,230,122`)
  //   } else if (choicerTime > 45) {
  //     setBackGroundColorModule('(241,177,139')
  //   }
  // }, [])
  

  // setInterval(() => {
  //   const choicerTime = new Date().getMinutes()
  //   if (choicerTime < 15) {
  //     setBackGroundColorModule('(197,222,229')
  //   } else if (choicerTime > 15 && choicerTime < 30) {
  //     setBackGroundColorModule('(243,219,121')
  //   } else if (choicerTime > 30 && choicerTime < 45) {
  //     setBackGroundColorModule(`(194,230,122`)
  //   } else if (choicerTime > 45) {
  //     setBackGroundColorModule('(241,177,139')
  //   }
  // },1000 * 60)
  
  // useEffect(() => {
  //   setCurrentImg('img/Summer.jpg')
  //   setBackGroundColorModule('(243,219,121)')
  // }, [])
  
  return (
    <MainLayout>
      <div style={{background:`rgb${currentColorForImg}, 0.7)`}} className="About">
        <div className="About-Header">
          <h1>О нас</h1>
        </div>
        <div style={{background:`rgb${currentColorForImg}, 0.82)`}} className="About-Content">
          <div className="About-Content-Inform">
            <h2 style={{textAlign:'center'}}>Наша команда 365events организована в 2022 году</h2>
            <h2>Мы молодая и активная команда профессионалов своего дела!</h2>
            <h2>Наша команда состоит из опытных организаторов, 
              которые готовы превратить вашу идею праздника в реальность. 
              Мы предлагаем индивидуальный подход к каждому клиенту, 
              чтобы создать мероприятие, которое отвечает всем требованиям и пожеланиям. 
              У нас есть уникальные и оригинальные идеи для каждого случая, 
              чтобы сделать ваш праздник незабываемым.</h2>
            
          </div>
          <div className="About-Content-OtherInfo">
            <div className="About-Content-OtherInfo-Contacts">
              <h3>Наши контакты</h3>
              <h3>Адресс:</h3>
              <h3>Телефон</h3>
              <h3>email:</h3>
              <h3>Группа в контакте:</h3>
            </div>
            <div className="About-Content-OtherInfo-Team">
              <h3>Наша команда</h3>
              <Link to={'/animators'} style={{width:'0', position:'relative', left:'-10%', marginTop:'1em'}}>Аниматоры</Link>
              <Link to={'/administration'} style={{width:'0', position:'relative', left:'-10%', marginTop:'1em'}}>Администрация</Link>
              <Link to={'/developers'} style={{width:'0', position:'relative', left:'-10%', marginTop:'1em'}} >Разработчики</Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
