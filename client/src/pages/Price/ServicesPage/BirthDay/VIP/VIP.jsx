import React from 'react'
import './VIP.scss'

export default function VIP({ data }) {

  return (
    <div className="VIP">
        <div className="VIP-Info">
            <div className="VIP-Info-Description">
                <p>{data.description}</p>
                <p className="VIP-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="VIP-Info-Main_Info_Show">
                <img
                    className="VIP-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="VIP-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="VIP-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="VIP-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='VIP-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}