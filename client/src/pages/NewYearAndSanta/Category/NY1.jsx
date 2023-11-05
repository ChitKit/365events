import React from 'react'
import './NYSCSS.scss'

export default function NY1({ data }) {

  return (
    <div className="NY1">
        <div className="NY1-Info">
            <div className="NY1-Info-Description">
                <p>{data.description}</p>
                <p className="NY1-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="NY1-Info-Main_Info_Show">
                <img
                    className="NY1-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="NY1-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="NY1-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="NY1-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='NY1-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}