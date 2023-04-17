import React from 'react'
import './Administration.scss'
import MainLayout from '../../../Layout/MainLayout'

export default function Administration({currentColorForImg}) {
  return (
    <MainLayout>
      <div style={{background:`rgba${currentColorForImg}, 0.7)`}} className="Administration">
        <h1>Администрация</h1>
      </div>
    </MainLayout>

  )
}
