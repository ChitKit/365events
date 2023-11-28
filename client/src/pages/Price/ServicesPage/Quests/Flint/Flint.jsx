import React, { useState } from "react";
import "./Flint.scss";
import BuyWindow from "../../../../../components/BuyWindow/BuyWindow";

export default function Flint({ data, setFullSizeImg }) {
    const [selectImage, setSelectImage] = useState(data.photo[0])
    const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)
    return (
        <div className="Flint">
            <div className="Flint-Info">
                <div className="Flint-Info-Main_Info_Show">
                    {data.photo && (
                        <>
                            <>
                                <div className="PriceCard-Content-Left_Content-MainPhoto">
                                    <img
                                        className="PriceCard-Content-Left_Content-MainPhoto-Img"
                                        onClick={() =>
                                            setFullSizeImg(selectImage.card)
                                        }
                                        id=""
                                        src={selectImage.card}
                                        alt="mainPhoto"
                                    />
                                </div>
                                <div className="PriceCard-Content-Left_Content-PhotoList">
                                    <div className="PriceCard-Content-Left_Content-PhotoList-Slider">
                                        {data.photo.map((el) => {
                                            return (
                                                <img
                                                    onClick={() => {
                                                        setSelectImage(el);
                                                    }}
                                                    className={
                                                        selectImage.id === el.id
                                                            ? "PriceCard-Content-Left_Content-PhotoList-Slider-Select_Card"
                                                            : "PriceCard-Content-Left_Content-PhotoList-Slider-Card"
                                                    }
                                                    id={el.id}
                                                    src={el.card}
                                                    alt={`${el.card}${el.id}`}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </>
                        </>
                    )}
                </div>
                <div className="Flint-Info-Description">
                    <p>{data.description}</p>
                </div>
                <div className="Flint-Info-Buy">
                    <p className="Flint-Info-Buy-Text">
                        {data.price}
                    </p>
                    <p 
                        onClick={() => setIsOpenOrderWindow(true)}
                        className='Flint-Info-Buy-Button_Buy'
                    >Заказать</p>
                </div>
            </div>
            
        {isOpenOrderWindow &&
            <BuyWindow isOpen={isOpenOrderWindow} setIsOpen={setIsOpenOrderWindow} title={`Квест ${data.name}`}/>
        }
        </div>
    );
}
