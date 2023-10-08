import React from 'react'
import './Illusioniists.scss';
import {illusionistsList} from './dataillusions'

export default function Illusioniists({setServicesCardData}) {

  return (
    <div className="Price-Services_Card Illusionists">
        <div onClick={() => {setServicesCardData(null)}} className="Price-Services_Card-Button_Close">X</div>
        <p className='Illusionists-Tittle'>В нашем агентстве есть 3 потрясающих иллюзиониста. У каждого своя программа.</p>
		<div className="Illusionists-Member_List">
			{illusionistsList.map((el) => {
				return (
					<div className="Illusionists-Member_List-Member_Card">
					{el.name === 'Дилан' ?
							<img className='Illusionists-Member_List-Member_Card-Photo' src="./imgTeam/Dilan_illusionist1.jpg" alt="Дилан" />
						:
						el.name === 'Максим' ?
							<img className='Illusionists-Member_List-Member_Card-Photo' src="" alt="Максим" />
						:
						el.name === 'Сергей' &&
							<img className='Illusionists-Member_List-Member_Card-Photo' src="./imgTeam/Sergey_illusionist1.jpg" alt="Сергей" />
					}
					<p className='Illusionists-Member_List-Member_Card-Name'>{el.name}</p>

					</div>
				)
				})
			}
		</div>
        {/* <img style={{width:'var(--width-content_price)', height:'var(--height_content_price)', borderRadius: '2em 0em'}} src={servicesCardData.img} alt={servicesCardData.name} />
        <div className="Price-Services_Card-Info">
            <p>{servicesCardData.description}</p>
        </div> */}
    </div>
  )
}