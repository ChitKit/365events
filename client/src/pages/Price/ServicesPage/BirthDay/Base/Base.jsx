import React, { useState } from 'react'
import './Base.scss'
import BuyWindow from '../../../../../components/BuyWindow/BuyWindow'

export default function Base({ data, setFullSizeImg }) {
    const [selectImage, setSelectImage] = useState(data.photo[0])
    const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)

  return (
    <div className="Base">
        <div className="Base-Info">
            <div className="Base-Info-Main_Info_Show">
                {data.photo &&
                    <>
                        <>
                            <div className="Base-Info-Main_Info_Show-MainPhoto">
                                    <img className="Base-Info-Main_Info_Show-MainPhoto-Img" onClick={() => setFullSizeImg(selectImage.card)} id="" src={selectImage.card} alt='mainPhoto' />
                                
                            </div>
                            <div className="Base-Info-Main_Info_Show-PhotoList">
                                <div className="Base-Info-Main_Info_Show-PhotoList-Slider">
                                        {data.photo.map((el) => {
                                            return (
                                                <img onClick={() => {setSelectImage(el)}} className={selectImage.id === el.id ? "Base-Info-Main_Info_Show-PhotoList-Slider-Select_Card" : "Base-Info-Main_Info_Show-PhotoList-Slider-Card"} id={el.id} src={el.card} alt={`${el.card}${el.id}`} />
                                                )
                                        })}
                                </div>
                            </div>
                        </>
                    </>
                }
            </div>
            <div className="Base-Info-Description">
                <p>{data.description}</p>
                <p className="Base-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="Base-Info-Buy">
                <p className="Base-Info-Buy-Text">
                    {data.price}
                </p>
                <p 
                    onClick={() => setIsOpenOrderWindow(true)}
                    className='Base-Info-Buy-Button_Buy'
                >Заказать</p>
            </div>
        </div>
        {isOpenOrderWindow &&
            <BuyWindow isOpen={isOpenOrderWindow} setIsOpen={setIsOpenOrderWindow} title={`День рождения (${data.name})`}/>
        }
    </div>
  )
}