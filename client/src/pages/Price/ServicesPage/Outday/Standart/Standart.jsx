import React from 'react'
import './Standart.scss'

export default function Standart({ data }) {

  return (
    <div className="Standart">
        <div className="Standart-Info">
            <div className="Standart-Info-Description">
                <p>{data.description}</p>
                <p className="Standart-Info-Description-More">Подробности <a target="_blank" href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="Standart-Info-Main_Info_Show">
                <img
                    className="Standart-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="Standart-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="Standart-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="Standart-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='Standart-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}