import React from 'react'
import './Base.scss'

export default function Base({ data }) {

  return (
    <div className="Base">
        <div className="Base-Info">
            <div className="Base-Info-Description">
                <p>{data.description}</p>
                <p className="Base-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="Base-Info-Main_Info_Show">
                <img
                    className="Base-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="Base-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="Base-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="Base-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='Base-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}