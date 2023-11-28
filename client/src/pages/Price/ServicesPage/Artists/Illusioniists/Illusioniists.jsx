import React, { useState } from 'react'
import './Illusioniists.scss';
import { illusionistsList } from './dataillusions'
import BuyWindow from '../../../../../components/BuyWindow/BuyWindow';

export default function Illusioniists({setServicesCardData}) {
	const [choiceIllusionits, setChoiceIllusionits] = useState(null)
    const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)

  return (
    <div className="Price-Services_Card Illusionists">
		{!choiceIllusionits ?
        <>
            <div onClick={() => {setServicesCardData(null)}} className="Price-Services_Card-Button_Close">
                <img src="/icons/icon_close.png" alt="button_Close" />
            </div>
            <p className='Illusionists-Tittle'>В нашем агентстве есть потрясающие иллюзионисты. У каждого своя программа.</p>
    		<div className="Illusionists-Member_List">
    			{illusionistsList.map((el) => {
    				return (
    					<div className="Illusionists-Member_List-Member_Card">
    					<img 
    						onClick={() => {setChoiceIllusionits(el)}}
    						className='Illusionists-Member_List-Member_Card-Photo' src={el.img} alt={el.name} />
    					<p className='Illusionists-Member_List-Member_Card-Name'>{el.name}</p>
    
    					</div>
    				)
    				})
    			}
    		</div>
        </>
        :
			<div className="Illusionists-Services_Card">
                <div onClick={() => {setChoiceIllusionits(null)}} className="Illusionists-Services_Card-Button_Close">
                    <img src="/icons/icon_close.png" alt="button_Close" /></div>
                <img className='Illusionists-Services_Card-Img' style={{borderRadius: '2em 0em'}} src={choiceIllusionits.img} alt={choiceIllusionits.name} />
                <div className="Illusionists-Services_Card-Info">
                    <p className="Illusionists-Services_Card-Info-Description-Title" >{choiceIllusionits.name}</p>
                    <div
                        style={{width:'90%'}}    
                    >
                        <p className="Illusionists-Services_Card-Info-Description"  style={{textAlign:'left'}}>{choiceIllusionits.description}</p>
                    </div>
                    <div className="Illusionists-Services_Card-Info-Description-Buy">
                        <p className="Illusionists-Services_Card-Info-Description-Buy-Price">{choiceIllusionits.price}</p>
                        <div
                            onClick={() => setIsOpenOrderWindow(true)}
                            className='Illusionists-Services_Card-Info-Description-Buy-Button'
                        >Заказать</div>
                    </div>
                </div>
            </div>
		}
        {isOpenOrderWindow &&
                <BuyWindow isOpen={isOpenOrderWindow} setIsOpen={setIsOpenOrderWindow} title={`Иллюзионист ${choiceIllusionits.name}`}/>
            }
    </div>
  )
}