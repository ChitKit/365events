import React, { useState } from 'react'
import './VIP.scss'
import BuyWindow from '../../../../../components/BuyWindow/BuyWindow'

export default function VIP({ data, setFullSizeImg }) {
    const [selectImage, setSelectImage] = useState(data.photo[0])
    const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)

  return (
    <div className="VIP_Outday">
        <div className="VIP_Outday-Info">
            <div className="VIP_Outday-Info-Main_Info_Show">
                {data.photo &&
                    <>
                        <>
                            <div className="VIP_Outday-Info-Main_Info_Show-MainPhoto">
                                    <img className="VIP_Outday-Info-Main_Info_Show-MainPhoto-Img" onClick={() => setFullSizeImg(selectImage.card)} id="" src={selectImage.card} alt='mainPhoto' />
                                
                            </div>
                            <div className="VIP_Outday-Info-Main_Info_Show-PhotoList">
                                <div className="VIP_Outday-Info-Main_Info_Show-PhotoList-Slider">
                                        {data.photo.map((el) => {
                                            return (
                                                <img onClick={() => {setSelectImage(el)}} className={selectImage.id === el.id ? "VIP_Outday-Info-Main_Info_Show-PhotoList-Slider-Select_Card" : "VIP_Outday-Info-Main_Info_Show-PhotoList-Slider-Card"} id={el.id} src={el.card} alt={`${el.card}${el.id}`} />
                                                )
                                        })}
                                </div>
                            </div>
                        </>
                    </>
                }
            </div>
            <div className="VIP_Outday-Info-Description">
                <p>{data.description}</p>
                <p className="VIP_Outday-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/uslugi-216716498?section=section&section_id=HUkaVBkGWldzRwcDWVg2&w=product-216716498_8054428%2Fquery" rel="noreferrer">здесь</a> </p>
            </div>
            <div className="VIP_Outday-Info-Buy">
                <p className="VIP_Outday-Info-Buy-Text">
                    {data.price}
                </p>
                <p 
                    onClick={() => setIsOpenOrderWindow(true)}
                    className='VIP_Outday-Info-Buy-Button_Buy'
                >Заказать</p>
            </div>
        </div>
        {isOpenOrderWindow &&
            <BuyWindow isOpen={isOpenOrderWindow} setIsOpen={setIsOpenOrderWindow} title={`Выпускной (${data.name})`}/>
        }
    </div>
  )
}