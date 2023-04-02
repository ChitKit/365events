import React, { useEffect, useState } from 'react'
import './Main.css'
import MainLayout from '../../Layout/MainLayout'

export default function Main() {

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
