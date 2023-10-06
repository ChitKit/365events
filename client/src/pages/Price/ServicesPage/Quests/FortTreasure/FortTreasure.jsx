import React from 'react'
import './FortTreasure.scss'

export default function FortTreasure({setServicesCardData}) {

  return (
    <div className="Price-Services_Card">
        <div onClick={() => {setServicesCardData(null)}} className="Price-Services_Card-Button_Close">X</div>
        {/* <img style={{width:'var(--width-content_price)', height:'var(--height_content_price)', borderRadius: '2em 0em'}} src={servicesCardData.img} alt={servicesCardData.name} />
        <div className="Price-Services_Card-Info">
            <p>{servicesCardData.name}</p>
            <p>{servicesCardData.description}</p>
        </div> */}
    </div>
  )
}