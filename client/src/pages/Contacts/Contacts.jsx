import React, { useEffect, useState } from 'react'
import './Contacts.scss'
import MainLayout from '../../Layout/MainLayout'


export default function Contacts({currentColorForImg}) {
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

  return (
      <div className="Contacts">
          <h1 style={{fontSize:'var(--tittle_module_font_size)'}}>Контакты</h1>
          <a target="_blank" href="https://vk.com/agency365">
              <img src="/img/icons8-vk-50.png" alt="image_vk" />
          </a>
          <a
              target="_blank"
              href="https://wa.me/+79890490402?text=Здравствуйте, хочу заказать у вас праздник"
          >
              <img src="/img/icons8-whatsapp-50.png" alt="image_whatsapp" />
          </a>
      </div>
  );
}
