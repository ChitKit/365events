import React, { useState } from 'react'
import './AlchimyShow.scss'
import BuyWindow from '../../../../../components/BuyWindow/BuyWindow'

export default function AlchimyShow({ data, setFullSizeImg }) {
    const [selectImage, setSelectImage] = useState(data.photo[0])
    const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)

  return (
    <div className="Alchimy_Show">
        <div className="Alchimy_Show-Info">
            <div className="Alchimy_Show-Info-Main_Info_Show">
                {data.photo &&
                    <>
                        <>
                            <div className="Alchimy_Show-Info-Main_Info_Show-MainPhoto">
                                    <img className="Alchimy_Show-Info-Main_Info_Show-MainPhoto-Img" onClick={() => setFullSizeImg(selectImage.card)} id="" src={selectImage.card} alt='mainPhoto' />
                                
                            </div>
                            <div className="Alchimy_Show-Info-Main_Info_Show-PhotoList">
                                <div className="Alchimy_Show-Info-Main_Info_Show-PhotoList-Slider">
                                        {data.photo.map((el) => {
                                            return (
                                                <img onClick={() => {setSelectImage(el)}} className={selectImage.id === el.id ? "Alchimy_Show-Info-Main_Info_Show-PhotoList-Slider-Select_Card" : "Alchimy_Show-Info-Main_Info_Show-PhotoList-Slider-Card"} id={el.id} src={el.card} alt={`${el.card}${el.id}`} />
                                                )
                                        })}
                                </div>
                            </div>
                        </>
                    </>
                }
            </div>
            <div className="Alchimy_Show-Info-Description">
                <p>{data.description}</p>
            </div>
            <div className="Alchimy_Show-Info-Buy">
                <p className="Alchimy_Show-Info-Buy-Text">
                    {data.price}
                </p>
                <p 
                    onClick={() => setIsOpenOrderWindow(true)}
                    className='Alchimy_Show-Info-Buy-Button_Buy'
                >Заказать</p>
            </div>
        </div>
        {isOpenOrderWindow &&
            <BuyWindow isOpen={isOpenOrderWindow} setIsOpen={setIsOpenOrderWindow} title={data.name}/>
        }
    </div>
  )
}