import React from 'react'
import './BubbleShow.scss'

export default function BubbleShow({setServicesCardData, data}) {

  return (
    <>
        <div onClick={() => {setServicesCardData(null)}} className="Price-Services_Card-Button_Close">X</div>
        <p>{data.name}</p>
    </>
  )
}