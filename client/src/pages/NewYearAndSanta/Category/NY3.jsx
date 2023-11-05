import React from 'react'
import './NYSCSS.scss'

export default function NY3({ data }) {

  return (
    <div className="NY3">
        <div className="NY3-Info">
            <div className="NY3-Info-Description">
                <p>{data.description}</p>
                <p className="NY3-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="NY3-Info-Main_Info_Show">
                <img
                    className="NY3-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="NY3-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="NY3-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="NY3-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='NY3-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}