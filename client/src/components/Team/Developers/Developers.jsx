import React from 'react'
import './Developers.scss'
import MainLayout from '../../../Layout/MainLayout'

export default function Developers({currentColorForImg}) {
  return (
    <MainLayout>
      <div style={{background:`rgba${currentColorForImg}, 0.7)`}} className="Developers">
        <h1>Разработчики</h1>
      </div>
    </MainLayout>

  )
}
