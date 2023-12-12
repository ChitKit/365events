import React, { useState } from 'react'
import './Base.scss'
import BuyWindow from '../../../../../components/BuyWindow/BuyWindow'

export default function Base({ data, setFullSizeImg }) {
const [selectImage, setSelectImage] = useState(data.photo[0])
const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)
  return (
    <div className="Base_Outday">
        <div className="Base_Outday-Info">
            <div className="Base_Outday-Info-Main_Info_Show">
                {data.photo &&
                    <>
                        <>
                            <div className="Base_Outday-Info-Main_Info_Show-MainPhoto">
                                    <img className="Base_Outday-Info-Main_Info_Show-MainPhoto-Img" onClick={() => setFullSizeImg(selectImage.card)} id="" src={selectImage.card} alt='mainPhoto' />
                                
                            </div>
                            <div className="Base_Outday-Info-Main_Info_Show-PhotoList">
                                <div className="Base_Outday-Info-Main_Info_Show-PhotoList-Slider">
                                        {data.photo.map((el) => {
                                            return (
                                                <img onClick={() => {setSelectImage(el)}} className={selectImage.id === el.id ? "Base_Outday-Info-Main_Info_Show-PhotoList-Slider-Select_Card" : "Base_Outday-Info-Main_Info_Show-PhotoList-Slider-Card"} id={el.id} src={el.card} alt={`${el.card}${el.id}`} />
                                                )
                                        })}
                                </div>
                            </div>
                        </>
                    </>
                }
            </div>
            <div className="Base_Outday-Info-Description">
                <p>{data.description}</p>
                <p className="Base_Outday-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="Base_Outday-Info-Buy">
                <p className="Base_Outday-Info-Buy-Text">
                    {data.price}
                </p>
                <p 
                    onClick={() => setIsOpenOrderWindow(true)}
                    className='Base_Outday-Info-Buy-Button_Buy'
                >Заказать</p>
            </div>
        </div>
        {isOpenOrderWindow &&
            <BuyWindow isOpen={isOpenOrderWindow} setIsOpen={setIsOpenOrderWindow} title={`Выпускной (${data.name})`}/>
        }
    </div>
  )
}