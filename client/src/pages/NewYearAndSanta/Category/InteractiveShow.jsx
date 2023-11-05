import React from 'react'
import './NYSCSS.scss'

export default function InteractiveShow({ data }) {

  return (
    <div className="InteractiveShow">
        <div className="InteractiveShow-Info">
            <div className="InteractiveShow-Info-Description">
                <p>{data.description}</p>
                <p className="InteractiveShow-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="InteractiveShow-Info-Main_Info_Show">
                <img
                    className="InteractiveShow-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="InteractiveShow-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="InteractiveShow-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="InteractiveShow-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='InteractiveShow-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}