import React from 'react'
import './NYSCSS.scss'

export default function NYinOrganization({ data }) {

  return (
    <div className="NYinOrganization">
        <div className="NYinOrganization-Info">
            <div className="NYinOrganization-Info-Description">
                <p>{data.description}</p>
                <p className="NYinOrganization-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="NYinOrganization-Info-Main_Info_Show">
                <img
                    className="NYinOrganization-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="NYinOrganization-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
                <img
                    className="NYinOrganization-Info-Main_Info_Show-Img"
                    src={data.img}
                    alt=""
                />
            </div>
            <div className="NYinOrganization-Info-Buy">
                <p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
                <div
                    className='NYinOrganization-Info-Buy-Button'
                >Заказать</div>
            </div>
        </div>
    </div>
  )
}