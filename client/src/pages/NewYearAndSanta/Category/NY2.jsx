import React from 'react'
import './NYSCSS.scss'

export default function NY2({ data }) {

  return (
    <div className="NY2">
        <div className="NY2-Info">
            <div className="NY2-Info-Description">
                <p>{data.description}</p>
                <p className="NY2-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="NY2-Info-Main_Info_Show">
                <img
                    className="NY2-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="NY2-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="NY2-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="NY2-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='NY2-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}