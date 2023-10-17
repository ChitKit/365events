import React from 'react'
import './FortTreasure.scss'

export default function FortTreasure({data}) {

  return (
    <div className="FortTreasure">
        <div className="FortTreasure-Info">
            <div className="FortTreasure-Info-Description">
                <p>{data.description}</p>
                <p className="FortTreasure-Info-Description-More">Подробности <a target="_blank" href="https://vk.com/@agency365-v-poiskah-sokrovischa-forta" rel="noreferrer">тут</a></p>
            </div>
            <div className="FortTreasure-Info-Main_Info_Show">
                <img
                    className="FortTreasure-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="FortTreasure-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="FortTreasure-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="FortTreasure-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='FortTreasure-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}