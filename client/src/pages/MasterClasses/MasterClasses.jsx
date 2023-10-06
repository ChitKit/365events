import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/MainLayout'
import './MasterClasses.scss'

export default function MasterClasses({currentColorForImg}) {

  return (
    <MainLayout>
      <div style={{background:`rgba${currentColorForImg}, 0.7)`}} className="MasterClasses" >
        <h1>Мастер классы</h1>
      </div>
    </MainLayout>
  )
}
