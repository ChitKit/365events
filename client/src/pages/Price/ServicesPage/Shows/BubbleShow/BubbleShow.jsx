import React, { useState } from "react";
import "./BubbleShow.scss";
import BuyWindow from "../../../../../components/BuyWindow/BuyWindow";

export default function BubbleShow({ data, setFullSizeImg }) {
    const [selectImage, setSelectImage] = useState(data.photo[0])
    const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)

    return (
        <div className="Bubble_Show">
            <div className="Bubble_Show-Info">
                <div className="Bubble_Show-Info-Main_Info_Show">
                    {data.photo &&
                        <>
                            <>
                                <div className="Bubble_Show-Info-Main_Info_Show-MainPhoto">
                                        <img className="Bubble_Show-Info-Main_Info_Show-MainPhoto-Img" onClick={() => setFullSizeImg(selectImage.card)} id="" src={selectImage.card} alt='mainPhoto' />
                                    
                                </div>
                                <div className="Bubble_Show-Info-Main_Info_Show-PhotoList">
                                    <div className="Bubble_Show-Info-Main_Info_Show-PhotoList-Slider">
                                            {data.photo.map((el) => {
                                                return (
                                                    <img onClick={() => {setSelectImage(el)}} className={selectImage.id === el.id ? "Bubble_Show-Info-Main_Info_Show-PhotoList-Slider-Select_Card" : "Bubble_Show-Info-Main_Info_Show-PhotoList-Slider-Card"} id={el.id} src={el.card} alt={`${el.card}${el.id}`} />
                                                    )
                                            })}
                                    </div>
                                </div>
                            </>
                        </>
                    }
                </div>
                <div className="Bubble_Show-Info-Description">
                    <p>{data.description}</p>
                </div>
				<div className="Bubble_Show-Info-Buy">
                    <p className="Bubble_Show-Info-Buy-Text">
                        {data.price}
                    </p>
                    <p 
                        onClick={() => setIsOpenOrderWindow(true)}
                        className='Bubble_Show-Info-Buy-Button_Buy'
                    >Заказать</p>
				</div>
            </div>
            {isOpenOrderWindow &&
                <BuyWindow isOpen={isOpenOrderWindow} setIsOpen={setIsOpenOrderWindow} title={data.name}/>
            }
        </div>
    );
}
