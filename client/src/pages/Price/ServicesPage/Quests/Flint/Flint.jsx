import React from 'react'
import './Flint.scss'

export default function Flint({data}) {

  return (
    <div className="Flint">
        <div className="Flint-Info">
            <div className="Flint-Info-Description">
                <p>{data.description}</p>
            </div>
            <div className="Flint-Info-Main_Info_Show">
                <img
                    className="Flint-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="Flint-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="Flint-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="Flint-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='Flint-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}