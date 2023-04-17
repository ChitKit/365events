import React from 'react'
import './Team.css'
import MainLayout from '../../Layout/MainLayout'
import Carosell from '../Carosell/Carosell'

export default function Team() {
  return (
    <MainLayout>
      <div className="Team-Main">
        <Carosell />
      </div>
    </MainLayout>

  )
}
