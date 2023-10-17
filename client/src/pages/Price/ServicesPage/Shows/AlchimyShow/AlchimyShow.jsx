import React from 'react'
import './AlchimyShow.scss'

export default function AlchimyShow({ data }) {

  return (
    <div className="Alchimy_Show">
        <div className="Alchimy_Show-Info">
            <div className="Alchimy_Show-Info-Description">
                <p>{data.description}</p>
            </div>
            <div className="Alchimy_Show-Info-Main_Info_Show">
                <img
                    className="Alchimy_Show-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="Alchimy_Show-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="Alchimy_Show-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="Alchimy_Show-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='Alchimy_Show-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}