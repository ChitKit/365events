import React from "react";
import "./Contacts.scss";

export default function Contacts() {
    return (
        <div className="Contacts">
            <h1 className="Contacts-Title">Контакты</h1>
            <div className="Contacts-Data">
                <div>
                <    p>Телефон:</p>
                    <p>8(989)049-04-02</p>
                </div>
                <div>
                    <p>email:</p>
                    <p>events.365@yandex.ru</p>
                </div>
            </div>
            <h6>Мы в социальных сетях и контакты для связи</h6>
            <div className="Contacts-Links">
                <a target="_blank" href="https://vk.com/agency365">
                    <img src="/icons/icon_VK.png" alt="image_vk" />
                </a>
                <a
                    target="_blank"
                    href="https://wa.me/+79890490402?text=Здравствуйте, хочу заказать у вас праздник"
                >
                    <img src="/icons/icon_WA.png" alt="image_whatsapp" />
                </a>
                <a
                    target="_blank"
                    href="https://dzen.ru/id/65551461e497022ae86294a6?clid=1400"
                >
                    <img src="/icons/icon_dzen.png" alt="image_dzen" />
                </a>
                <a target="_blank" href="https://t.me/zakaz365events">
                    <img src="/icons/icon_TG.png" alt="image_telegram" />
                </a>
            </div>
        </div>
    );
}
