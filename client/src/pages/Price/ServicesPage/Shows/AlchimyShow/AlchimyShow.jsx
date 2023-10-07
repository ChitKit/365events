import React from 'react'
import './AlchimyShow.scss'

export default function AlchimyShow({setServicesCardData, data}) {

  return (
    <>
        <div onClick={() => {setServicesCardData(null)}} className="Price-Services_Card-Button_Close">X</div>
        <p>{data.name}</p>
    </>
  )
}