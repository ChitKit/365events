import React, { useEffect, useState } from "react";
import "./Main.scss";
import MainLayout from "../../Layout/MainLayout";

export default function Main({}) {
    // h2 всплывает на красивом фоне (рамка )
    return (
        <MainLayout>
            <div className="MainPage">
                <div className="MainPageH1Div">
                    <h1
                        style={{ position: "relative", zIndex: "2" }}
                        className="MainPageH1"
                    >
                        Агентство праздников <br />
                        365:events
                    </h1>
                </div>

                <div className="MainPageH2Div">
                    <h2
                        style={{ position: "relative", zIndex: "2" }}
                        className="MainPageH2"
                    >
                        Доставляем с любовью <br /> самые тёплые и волшебные
                        праздники <br /> на дом, в детский садик, школу или
                        офис!
                        <br /> 365 дней в году.
                    </h2>
                </div>
            </div>
        </MainLayout>
    );
}
