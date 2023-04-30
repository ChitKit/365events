import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import './Services.scss'

export default function Services({currentColorForImg}) {

  return (
    <MainLayout>
      <div style={{background:`rgba${currentColorForImg}, 0.7)`}} className="Services" >
        <h1>Наши услуги</h1>
      </div>
    </MainLayout>
  )
}
