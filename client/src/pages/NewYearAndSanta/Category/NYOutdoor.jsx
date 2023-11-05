import React from 'react'
import './NYSCSS.scss'

export default function NYOutdoor({ data }) {

  return (
    <div className="NYOutdoor">
        <div className="NYOutdoor-Info">
            <div className="NYOutdoor-Info-Description">
                <p>{data.description}</p>
                <p className="NYOutdoor-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="NYOutdoor-Info-Main_Info_Show">
                <img
                    className="NYOutdoor-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="NYOutdoor-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="NYOutdoor-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="NYOutdoor-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='NYOutdoor-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}