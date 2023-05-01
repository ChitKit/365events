import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import './Services.scss'
import { Link } from 'react-router-dom'

export default function Services({currentColorForImg}) {

  return (
    <MainLayout>
      <div style={{background:`rgba${currentColorForImg}, 0.7)`}} className="Services" >
        <h1>Наши услуги</h1>
        <div style={{background:`rgba${currentColorForImg}, 0.82)`}} className="ServicesMenu">
          <Link className="ServicesMenu-Show" to="/shows"><div >Шоу</div></Link>
          <Link className="ServicesMenu-MK" to="/master_classes"><div>Мастер классы</div></Link>
          <Link className="ServicesMenu-Events" to="/events"><div >Праздники</div></Link>
          <Link className="ServicesMenu-AddServ" to="/additional_services"><div >На заказ</div></Link>
        </div>
      </div>
    </MainLayout>
  )
}
