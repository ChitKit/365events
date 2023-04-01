import React from 'react'
import Carosell from '../Carosell/Carosell'
import './Team.css'
import MainLayout from '../../Layout/MainLayout'

export default function Team() {
  return (
    <MainLayout>
      <div className="Team-Main">
        <Carosell />
      </div>
    </MainLayout>

  )
}
