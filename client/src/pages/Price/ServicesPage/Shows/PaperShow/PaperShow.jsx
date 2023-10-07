import React from 'react'
import './PaperShow.scss'

export default function PaperShow({setServicesCardData, data}) {

  return (
    <>
        <div onClick={() => {setServicesCardData(null)}} className="Price-Services_Card-Button_Close">X</div>
        <p>{data.name}</p>
    </>
  )
}